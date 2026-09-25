import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { KNOWLEDGE_BASE } from './constants/knowledgeBase.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured on the server');
      return res.status(500).json({
        error: 'AI service configuration is missing on the server. Please ensure GEMINI_API_KEY is configured.',
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const prompt = `
You are an expert AI assistant specializing in prompt engineering for healthcare and medical education.
Your knowledge is strictly limited to the provided text below. You must not use any external information or prior knowledge.

--- START OF KNOWLEDGE BASE ---
${KNOWLEDGE_BASE}
--- END OF KNOWLEDGE BASE ---

Based ONLY on the text provided in the knowledge base, answer the following user's question.
Your answer should be helpful, concise, well-structured, and directly derived from the provided documents.
If the question is in Arabic, reply in professional Arabic based on the knowledge base. If in English, reply in English.

User's question: "${question}"

If the answer cannot be found in the provided knowledge base, you MUST respond with:
"I'm sorry, but I cannot find an answer to that question in the provided documents." (or in Arabic: "عذراً، لا أستطيع العثور على إجابة لهذا السؤال في الأوراق البحثية المرفقة.").
Do not attempt to answer if the information is not present in the text.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const text = response.text || '';
    return res.json({ text: text.trim() });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    return res.status(500).json({
      error: error?.message || 'Error processing request',
    });
  }
});

const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.use((_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port} (mode: ${isProduction ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
