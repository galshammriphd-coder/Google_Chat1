export const getChatbotResponse = async (question: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Server error occurred');
    }

    return data.text || '';
  } catch (error: any) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
};
