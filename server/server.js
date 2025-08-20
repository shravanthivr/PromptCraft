import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
});

app.post('/api/generate', async (req, res) => {

    try {
        const { tool, prompt } = req.body;

        // Create a dynamic system message based on the selected tool
        let systemMessage = 'You are a helpful assistant.';
        switch (tool) {
            case 'Title_Generator':
                systemMessage = 'You are an expert at generating catchy and SEO-friendly titles. Based on the following content, create a compelling title.';
                break;
            case 'Summarize':
                systemMessage = 'You are an expert at summarizing text. Please provide a concise summary of the following content.';
                break;
            case 'Rephrase':
                systemMessage = 'You are an expert at rephrasing text. Please rephrase the following sentence to be more clear, concise, or engaging.';
                break;
            case 'Extract_Keywords':
                systemMessage = 'You are an expert at extracting keywords from text. Please identify and list the main keywords from the following content.';
                break;
            case 'Open_ended_QA':
                systemMessage = 'You are a helpful assistant designed to answer open-ended questions.';
                break;
        }

        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: systemMessage },
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 150
        });

        res.json({ text: response.choices[0].message.content });
    } catch (error) {
        console.error("Error details:", error.response?.data || error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});