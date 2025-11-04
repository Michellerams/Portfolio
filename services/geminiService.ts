import { GoogleGenAI, Type } from "@google/genai";
import type { PortfolioData } from '../types';
import type { Chat } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const portfolioSchema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "A plausible name for an AI/ML engineer." },
    title: { type: Type.STRING, description: "The job title, e.g., 'Machine Learning Engineer' or 'AI Research Scientist'." },
    about: { type: Type.STRING, description: "A short, professional summary paragraph about the engineer's skills and interests." },
    projects: {
      type: Type.ARRAY,
      description: "A list of 6 impressive AI/ML projects.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING, description: "A concise description of the project, its goals, and the technologies used." },
          tags: { 
            type: Type.ARRAY, 
            description: "A list of 3-5 relevant keywords or technologies (e.g., 'PyTorch', 'Computer Vision', 'NLP').",
            items: { type: Type.STRING } 
          },
          githubUrl: { type: Type.STRING, description: "A plausible GitHub repository URL for the project." },
          liveDemoUrl: { type: Type.STRING, description: "A plausible URL for a live demo of the project." },
        },
        required: ["title", "description", "tags", "githubUrl", "liveDemoUrl"],
      },
    },
    experience: {
      type: Type.ARRAY,
      description: "A list of 2 past work experiences in chronological order (oldest first).",
      items: {
        type: Type.OBJECT,
        properties: {
          company: { type: Type.STRING },
          role: { type: Type.STRING },
          duration: { type: Type.STRING, description: "e.g., 'Jan 2022 - Present'" },
          description: { type: Type.STRING, description: "A brief summary of responsibilities and achievements." },
        },
        required: ["company", "role", "duration", "description"],
      },
    },
    education: {
      type: Type.ARRAY,
      description: "A list of 2 educational qualifications.",
      items: {
        type: Type.OBJECT,
        properties: {
          institution: { type: Type.STRING },
          degree: { type: Type.STRING, description: "e.g., 'M.S. in Computer Science'" },
          duration: { type: Type.STRING, description: "e.g., '2018 - 2020'" },
        },
        required: ["institution", "degree", "duration"],
      },
    },
    certificates: {
      type: Type.ARRAY,
      description: "A list of 6 relevant certifications.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          issuer: { type: Type.STRING, description: "e.g., 'Coursera', 'Google Cloud'" },
          date: { type: Type.STRING, description: "e.g., 'Issued Jun 2023'" },
          imageUrl: { type: Type.STRING, description: "A plausible URL for the certificate image. Use a placeholder if a real one isn't available." },
          credentialUrl: { type: Type.STRING, description: "An optional, plausible URL to verify the credential." },
        },
        required: ["name", "issuer", "date", "imageUrl"],
      },
    },
    skills: {
      type: Type.ARRAY,
      description: "A list of 7 key technical skills.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
        },
        required: ["name"],
      },
    },
    competencies: {
      type: Type.ARRAY,
      description: "A list of 8 key AI/ML competencies, such as 'Machine Learning', 'TensorFlow', etc.",
      items: { type: Type.STRING },
    },
    contactEmail: { type: Type.STRING, description: "A plausible professional email address." },
    githubUrl: { type: Type.STRING, description: "A plausible GitHub profile URL, e.g., 'https://github.com/username'." },
    linkedinUrl: { type: Type.STRING, description: "A plausible LinkedIn profile URL, e.g., 'https://linkedin.com/in/username'." },
  },
  required: ["name", "title", "about", "projects", "experience", "education", "certificates", "skills", "competencies", "contactEmail", "githubUrl", "linkedinUrl"],
};


export const generatePortfolioContent = async (): Promise<PortfolioData> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a full portfolio content for a fictional, highly skilled AI/ML engineer named Michelle Bontle Rammila. The tone should be professional and impressive. For the projects section, ensure the first project has the following details: title: 'Aura', description: 'A no-code educational chatbot that simplifies complex AI fundamentals. Aura guides users through machine learning, NLP, and neural networks with interactive Q&A, visual aids, and personalized learning flows, making AI accessible for beginners.', tags: ['No-Code', 'Chatbot', 'AI Education', 'NLP'], githubUrl: 'https://github.com/Michellerams/Aura', liveDemoUrl: 'https://aura-flax.vercel.app/'. Ensure the second project has the following details: title: 'AI Code Mentor', description: 'An AI-powered mentor designed to address educational challenges by providing intelligent assistance and feedback on coding problems. It helps learners understand complex concepts and improve their programming skills through personalized, real-time guidance.', tags: ['AI in Education', 'Python', 'Code Analysis', 'Personalized Learning'], githubUrl: 'https://github.com/Michellerams/AI-Code-Mentor', liveDemoUrl: 'https://ai-code-mentor-psi.vercel.app/'. Ensure the third project has the following details: title: 'Creative Writer\\'s Assistant', description: 'An AI writing companion for authors and marketers. Features customizable prompts and an intuitive interface to adjust tone and style, streamlining content creation.', tags: ['Generative AI', 'Content Creation', 'Prompt Engineering'], githubUrl: 'https://github.com/Michellerams/creative-writer-s-assistant', liveDemoUrl: 'https://creative-writer-s-assistant.vercel.app/'. Ensure the fourth project has the following details: title: 'ResumeBuilder', description: 'An AI-powered resume builder that creates customized, ATS-friendly resumes. It intelligently generates content with industry-specific keywords, offers job description matching analysis, and suggests content improvements. Features multiple templates, real-time previews, and exports to PDF, DOCX, and HTML, all within a responsive, privacy-focused interface.', tags: ['Generative AI', 'NLP', 'React', 'ATS Optimization'], githubUrl: 'https://github.com/Michellerams/ResumeGenerator', liveDemoUrl: 'https://resume-generator-drab-psi.vercel.app/'. Ensure the fifth project has the following details: title: 'SentiIQ: Sentiment Analysis Tool', description: 'A sophisticated sentiment analysis tool designed to interpret and classify emotions in text data. SentiIQ leverages natural language processing to provide insights into public opinion, customer feedback, and social media trends, demonstrating a strong capability in building data-driven AI applications.', tags: ['Sentiment Analysis', 'NLP', 'Python', 'Data Visualization'], githubUrl: 'https://github.com/Michellerams/SentiIQ', liveDemoUrl: 'https://senti-iq.vercel.app/'. Ensure the sixth project has the following details: title: 'SpamSentinel', description: 'An intelligent AI application designed to solve the real-world problem of spam by integrating multiple AI technologies into a cohesive solution. It combines language processing, specialized AI, and robust data systems within a user-friendly interface, complete with persistent storage and comprehensive error handling.', tags: ['⭐ Capstone Project', 'Multi-API Integration', 'Full-Stack AI', 'Python', 'Data Persistence'], githubUrl: 'https://github.com/Michellerams/SpamSentinel', liveDemoUrl: 'https://spam-sentinel.vercel.app/'. For the experience section, ensure there are two entries in chronological order (oldest first). The first entry should be: company: 'Sisekelo Institute of Business and Technology', role: 'Software Testing Learnership', duration: 'Feb 2023 – Jan 2024', and description: 'Performed automated testing using Selenium. Developed and executed test cases using Mocha (JavaScript). Conducted JUnit testing for application reliability. Gained expertise in Java OCA and Java OCP.'. The second experience entry should be: company: 'CAPACITI', role: 'Digital Associate Intern', duration: 'August 2023 – Present', and description: 'Engineered and deployed no-code prototypes and AI-powered tools utilizing Generative AI APIs and LLMs to automate and solve practical organizational problems. Participated in an intensive Agile Scrum (AI Bootcamp) environment, contributing to a project portfolio of 4+ deployed AI/ML tools. Applied principles of AI Ethics and Bias Mitigation to project development, ensuring responsible technology deployment.'. For the education section, make sure the first entry has the institution as 'Richfield Graduate Institute of Technology', the degree as 'Bachelor of Science in Information Technology', and the duration as '2019 – 2021'. The second entry should be institution: 'Thuto Pele Secondary School', degree: 'National Senior Certificate (NSC)', and duration: '2018'. For the certificates section, create exactly 6 entries with the following details. Set the date for all certificates to 'Issued 2025' and generate a plausible credentialUrl for each. Use 'https://storage.googleapis.com/aistudio-hub-files/USER_CONTENT/46797a73-0b26-4277-a5ca-f3b10b00c25a.png' as the placeholder for every imageUrl. 1st certificate: name: 'Supervised Machine Learning Regression', issuer: 'DeepLearning.AI'. 2nd certificate: name: 'Python for Data science', issuer: 'Coursera'. 3rd certificate: name: 'Generative AI with Large Language Model', issuer: 'Google'. 4th certificate: name: 'Introduction to Artificial Intelligence (AI)', issuer: 'Coursera'. 5th certificate: name: 'AI for Everyone', issuer: 'DeepLearning.AI'. 6th certificate: name: 'AI Foundations Prompt Engineering with ChatGPT', issuer: 'Arizona State University'. Ensure the contactEmail is 'bontlemichelle66@gmail.com'. Use 'https://github.com/Michellerams' for the main githubUrl and 'https://www.linkedin.com/in/michellebontlerammila/' for the linkedinUrl. Generate a list of 7 prominent technical skills, including Python, Java, JavaScript, AI Prototyping, SQL, Generative AI, and Vercel. Finally, generate a list of 8 key AI/ML competencies: Machine Learning, Python, TensorFlow, PyTorch, Data Analysis, Deep Learning, NLP, and Computer Vision.",
      config: {
        responseMimeType: "application/json",
        responseSchema: portfolioSchema,
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);

    // Basic validation to ensure the structure matches
    if (!parsedData.name || !Array.isArray(parsedData.projects) || !Array.isArray(parsedData.skills) || !Array.isArray(parsedData.competencies)) {
      throw new Error("Generated data does not match the expected schema.");
    }
    
    return parsedData as PortfolioData;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to fetch or parse portfolio data from Gemini API.");
  }
};


export const createChatSession = (portfolioData: PortfolioData): Chat => {
  const systemInstruction = `You are a witty, slightly sarcastic, and humorous AI assistant named Chip. You are representing Michelle Bontle Rammila's portfolio. Your purpose is to answer questions about all aspects of her portfolio, including her projects, work experience, education, certificates, skills, competencies, and how to contact her. Your ONLY source of information is the JSON data provided below. Do not answer questions outside of this context. If asked something you don't know from the data, deflect with humor and suggest they ask about something you do know, like her projects or skills. Keep responses concise and engaging. IMPORTANT: Do not use any markdown formatting, especially asterisks (*). All your responses must be plain text. Here is Michelle's portfolio data: ${JSON.stringify(portfolioData, null, 2)}`;
  
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
    },
  });
  return chat;
};