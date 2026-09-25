export const getChatbotResponse = async (question: string): Promise<string> => {
  try {
    const baseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
    const endpoint = `${baseUrl}/api/chat`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.status === 404) {
      throw new Error(
        'لم يتم العثور على خادم المعالجة (/api/chat). تنبيه: استضافة GitHub Pages تخدم الملفات الثابتة فقط ولا تدعم تشغيل خادم Node.js / Express المرفق. لنشر التطبيق كاملاً مع الذكاء الاصطناعي يُنصح باستخدام منصة تدعم Node.js مثل Render أو Railway أو Vercel أو تفعيل VITE_API_URL.'
      );
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `خطأ من الخادم (${response.status})`);
    }

    return data.text || '';
  } catch (error: any) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
};
