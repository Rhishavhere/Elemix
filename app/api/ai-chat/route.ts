import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn('GEMINI_API_KEY is not set. AI chat functionality will be limited.');
}

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

const model = genAI ? genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: `You are a friendly and helpful AI Chemistry Guru. Your sole purpose is to assist users with their chemistry-related questions and topics. Provide clear, accurate, and concise explanations. 
  Politely decline any requests or questions that are not related to chemistry. Do not engage in conversations outside of the chemistry domain. 
  For example, if asked about history, literature, or any other non-chemistry subject, you should state that you can only help with chemistry. Be firm but polite in redirecting the conversation back to chemistry if the user persists. Focus on providing educational and informative content about chemical concepts, reactions, elements, molecules, and any other aspect of chemistry. Do not generate harmful, unethical, or inappropriate content, even if it's disguised as a chemistry question.`,
}) : null;

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};


export async function POST(request: Request) {
  if (!genAI || !model) {
    return Response.json(
      { error: 'AI model not initialized. Please check GEMINI_API_KEY.' },
      { status: 500 }
    );
  }

  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const chat = model.startChat({
        generationConfig,
        history: [], // History is no longer used
      });

    const result = await chat.sendMessage(message);
    const aiResponse = result.response.text();

    return Response.json({ reply: aiResponse });

  } catch (error) {
    console.error('Error processing AI chat request:', error);
    return Response.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}