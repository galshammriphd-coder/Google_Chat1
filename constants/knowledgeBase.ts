
export const KNOWLEDGE_BASE = `
[DOCUMENT 1: Prompt Engineering in Medical Education by Heston & Khun]

Abstract: Artificial intelligence-powered generative language models (GLMs), such as ChatGPT, Per-
plexity AI, and Google Bard, have the potential to provide personalized learning, unlimited practice
opportunities, and interactive engagement 24/7, with immediate feedback. However, to fully utilize
GLMs, properly formulated instructions are essential. Prompt engineering is a systematic approach to
effectively communicating with GLMs to achieve the desired results. Well-crafted prompts yield good
responses from the GLM, while poorly constructed prompts will lead to unsatisfactory responses.
Besides the challenges of prompt engineering, significant concerns are associated with using GLMs in
medical education, including ensuring accuracy, mitigating bias, maintaining privacy, and avoiding
excessive reliance on technology. Future directions involve developing more sophisticated prompt
engineering techniques, integrating GLMs with other technologies, creating personalized learning
pathways, and researching the effectiveness of GLMs in medical education.

1. Introduction
Generative language models (GLMs) are neural networks trained primarily on lan-
guage data gathered from the Internet. GLMs are large language models specifically
designed to generate high-quality, human-like text. GLMs are built upon a generative
pre-trained transformer model (GPT). The first version, GPT-1, was released in 2018.
This version had approximately 117 million parameters utilizing just over 100,000 nodes.
Since then, the scale of GPT models has rapidly increased. GPT-2, released in 2019, had
around 1.5 billion parameters, followed by GPT-3 in 2020, with 175 billion parameters. The
latest version, GPT-4, released in 2023, is estimated to utilize 1 trillion parameters.
One notable development in the GPT series is the introduction of GPT-3.5, which
includes an online chat interface. OpenAI introduced ChatGPT in 2022, allowing users to
interact directly with GPT-3.5 and GPT-4. ChatGPT employs natural language processing
and can respond to various inputs from human users. It can understand multiple languages,
including computer coding languages, and perform data analysis and basic mathematical
calculations. Other GLM chatbots such as Google Bard and Bing AI have real-time access
to the Internet, and Anthropic easily allows uploading files for analysis. However, for
all GLMs, structuring the input in a specialized manner ensures the most appropriate
output. This process, called prompt engineering, effectively communicates with the GLMs
to achieve desired results. Although in existence for less than a year, GLM chatbots
dramatically impact society, including medical education. Prompt engineering is a crucial
process in maximizing the benefits of GLMs.

2. Generative Language Models in Medical Education
GLMs have great potential to improve learning and comprehension in medical educa-
tion. They can interactively and in real-time interact with a human user using a natural
language such as English or Spanish. Because of their ability to communicate in natural
languages, GLMs have the potential to simulate realistic patient scenarios, provide useful
information on various medical topics, and assist in developing patient communication
skills. GLMs, due to their extensive training databases, contain a tremendous volume of
medical information. A recent study looked at the performance of ChatGPT on the United
States Medical Licensing Exam (USMLE). The researchers found that ChatGPT performed
at or near the passing threshold for all three exams without any specialized training or
reinforcement. Moreover, ChatGPT demonstrated a high level of concordance and insight
in its explanations. These results suggest that GLMs have significant potential to assist
with medical education and even potentially aid in clinical decision-making.
The use of GLMs in medical education is part of a broader trend toward digitization
and the incorporation of technology in teaching. This trend has been accelerated by the
COVID-19 pandemic, which has required remote learning and reliance on online resources.
Utilizing GLMs is a critical component of this trend, offering the potential to enhance
personalized learning, foster critical thinking, and improve evidence-based thinking in
medicine. GLMs can also create realistic patient simulations and give personalized feedback to
the student. They can help overcome language barriers and assist students in learning
a foreign language, focusing on healthcare settings. However, despite these advantages,
ensuring content quality, addressing biases, and managing ethical and legal concerns
remain challenges in using artificial intelligence (AI) and GLMs in medical education.

3. Prompt Engineering in Generative Language Models
Prompt engineering is crucial to utilizing large language models effectively, especially
in medical education. It involves designing the input or 'prompt' in a way that guides the
model to produce the desired output.
In medical education, prompt engineering can create realistic patient scenarios, gen-
erate multiple-choice questions, or provide explanations of complex medical concepts.
Prompt engineering can also control the model's output's length, complexity, and style. For
example, prompts can be designed to elicit short, simple responses for beginner students
or more complex, detailed responses for advanced learners. Prompt engineering can also
generate messages appropriate for patient education and mass media campaigns.
Moreover, prompt engineering can help minimize potential pitfalls, such as the generation
of incorrect or misleading information. Educators can guide the model with carefully
crafted prompts to provide more accurate and reliable information.

4. Types of Prompts
4.1. Zero-Shot and Few-Shot Prompts
A zero-shot prompt asks a question of the GLM about data that it was not specifically
trained on. The “zero” in “zero-shot” represents that the GLM has little or no specific
training on the specific task or question in the prompt. “Shot" represents giving the GLM
an example, so “zero-shot” means that the GLM was not specifically trained to do the
task or answer the question and that the prompt itself does not give an example for the
GLM to work off of. Translation tasks are examples of zero-shot prompts because GLMs
haven't been given specific training examples. However, based on its extensive training
in languages, it can generalize and generate a plausible translation without task-specific
training.
Few-shot prompts are like zero-shot ones in that the GLM hasn't been specifically
trained to answer the question or do the requested task. However, the prompt contains an
example to help the GLM understand the request. For example, the prompt “Give me a
quiz" is zero-shot, but “Give me a quiz on alcoholic cirrhosis” is a few-shot prompt.

4.2. Prompting Levels
It has been proposed that prompts can be categorized into levels 1 to 4. The first
level is a simple question. The next level adds context about the writer and the GLM. The
third level provides examples for the GLM to work from, and the fourth level allows the
GLM to break down the request into components.
Level 1 prompts ask simple questions like “Tell me about type-2 diabetes."
Level 2 prompts add context to Level 1, e.g., “You are to play the role of a Professor of
Medicine at Oxford, and I am your student. Tell me about type-2 diabetes.”
Level 3 prompts involve giving examples of Level 2 prompts. For example, a user may
start with this prompt: “I learn best by reading short essays. Here is an example of
an essay particularly educational to me: [here cut-n-paste an example essay].” Then,
submit the Level 2 prompt previously given, and the output should be closer to the
desired result.

4.3. Structured Prompts
One method is to have a prompt containing the following
components: context, general request, how the GLM is to act, and output format.
The context is when you describe who is asking the question. For example, "I am a
college freshman taking my first biology class". The general request is a broad overview of what you want from the GLM.
For example, "I need some help understanding the Krebs Cycle". Next, the GLM is told how to act, often by assigning it a role.
For example, "You are to play the role of my college professor...".
Finally, the GLM is told exactly what to do and how to format the output. "Please provide me with a frequently
asked question (FAQ) listing the most fundamental features of the Krebs Cycle. Please
provide 15 items in the FAQ. Each question should be 25 words or less, and each answer
should be 50 words or less".

4.4. Iterative Prompts
Sometimes, it helps to have the GLM assist in creating a prompt. An iterative prompt helps generate a prompt that the GLM can understand. Example: "Your first response will be to ask me what the prompt should be about. Together, we will create a clear prompt through continual iterations... (a) revised prompt ... (b) Questions (ask two relevant questions...)"

5. Bad Prompts
Vague, leading, overly specific, complex, double-barreled, emotionally charged, or
insensitive prompts work poorly. Vague prompts like “What is the meaning of life?" are too broad. Leading questions suggest a particular outcome.
Even simple mathematical prompts can result in an incorrect answer. Adding the phrase “Think step by step" to the prompt will help the GLM respond correctly.
GLMs also struggle with logic puzzles.

5.4. Academic Citations
GLMs are also prone to make up fake references or citations. ChatGPT will openly admit
to creating fake references when probed. For a GLM, the primary objective is to write
text that looks good, and, in the style requested, accuracy appears to be only a secondary
priority.

6. Potential Educational Applications
When used appropriately, GLMs such as ChatGPT allow students to learn their mate-
rial more efficiently. GLMs are good at summarizing material, creating FAQs, and creating
test questions. Since the outputs from GLMs are unique, students potentially have an
unlimited and personalized question bank. For example, ChatGPT can summarize and simplify difficult topics. ChatGPT can also generate mnemonics, tables, FAQs, and other tools.

[DOCUMENT 2: A guide to prompt design: foundations and applications for healthcare simulationists by Maaz et al.]

This paper offers simulationists a practical guide to effective
prompt design. Grounded in a structured literature review and iterative prompt
testing, this paper proposes best practices for developing calibrated prompts,
explores various prompt types and techniques with use cases, and addresses
the challenges, including ethical considerations for using LLMs in healthcare
simulation.

Calibrated prompts are defined as clear, precise, and contextual input for
genAI that is sufficiently broad to produce relevant answers, thereby
enhancing the reliability and quality of the output.

Prompt types and techniques:
Instruction-based: "Write a 5-year old male primary care normal physical exam at a well-child visit."
Completion-based: "Normal vital signs for a 5-year old male are..."
Context-providing: "Write the history of a 5-year-old asthmatic patient from an experienced physician..."
Example-driven: "Here is an example of a normal pediatric physical exam. Now write a normal physical exam for a 5-year old male."
Goal-oriented: "Write a 5-year old male primary care normal physical exam... Ensure that it has vital signs, general appearance, and head-to-toe exam."

Prompting techniques:
Zero-Shot: Presenting a model with a task it has never explicitly seen.
One-Shot: The model is given one example to "learn" from.
Few-Shot: The model is given a few examples to "learn" from.
Prompt Chaining: Using the output of one prompt as the input for the next.

Challenges in LLMs:
Micro-level challenges impact at the user level and include: (1)
generating fabricated information (hallucinations), (2) lack of transparency about
data sources, and minimal explainability of processes, leading to (3)
privacy concerns, and (4) accentuating bias and inequity.
Macro-level challenges: fragmented state legislation and
organizational governance, leading to deficient LLM oversight,
evaluation, and monitoring.

Recommendations for prompt design:
1. Clarity: A clear question is essential. Specific prompts yield better answers.
2. Providing context: Context enables more relevant responses. Specifying tone enhances context.
3. Goal alignment: A prompt should align with the intended outcome.
4. Form of output: Specifying the form of output (e.g., table, summary) ensures the response meets needs.
5. Safety guardrails: Exercising due diligence, ensuring privacy, giving balanced prompts, formulating precise questions, and verifying the output.

[DOCUMENT 3: Prompt Engineering in Healthcare by Patil, Heston & Bhuse]

Abstract: This article addresses the educational gap by providing an overview of generative AI prompt
engineering, its potential applications in primary care medicine, and best practices for its effective
implementation. The role of well-crafted prompts in eliciting accurate, relevant, and valuable
responses from Al models is discussed, emphasizing the need for prompts grounded in medical
knowledge and aligned with evidence-based guidelines.

Understanding Prompt Engineering:
Prompt engineering designs and optimizes input prompts to guide generative AI
models toward producing desired outputs. Well-crafted prompts help align the AI outputs with the user's intentions, ensuring
the generated content is coherent and appropriate for the context.
Prompts can range from simple, open-ended questions to complex, multi-step instructions
that break tasks into smaller, more manageable components.

Best Practices for Prompt Engineering in Healthcare:
1. Incorporating Domain-Specific Knowledge and Guidelines.
2. Iterative Refinement and Validation of Prompts: An ongoing process that involves the contin-
uous testing, evaluation, and improvement of prompts based on feedback from medical
professionals.
3. Addressing Ethical Considerations and Potential Biases: Design prompts that are inclusive, diverse, and free from biases.

Applications of Prompt Engineering in Family Medicine:
- Enhancing Patient-Provider Communication: Generate patient-friendly explanations of medical concepts.
- Streamlining Clinical Documentation: Generate draft clinical notes, referral letters.
- Supporting Medical Education and Training: Generate interactive case studies, virtual patient encounters.
- Facilitating Personalized Care and Shared Decision Making: Generate tailored treatment recommendations.

Types of Prompts in a Healthcare Environment:
- Zero-shot: "What are the common symptoms of influenza?"
- Few-shot: "Here are two examples of patient education materials on hypertension: [Example 1] [Example 2]. Now, create a similar patient education material on type 2 diabetes."
- Ask Me Anything: "As a family clinician, I often encounter patients with mental health concerns... What are some best practices...?"
- Least-to-Most: Breaks a complex task into smaller steps.
- Role Assignment: "Act as an endocrinologist and provide guidance on managing a patient..."
- Tone: "Explain the concept of herd immunity in simple terms suitable for a patient with limited health literacy. Use a friendly, direct tone."
- Contextual Priming: Provides relevant background information before the main task.
`;
