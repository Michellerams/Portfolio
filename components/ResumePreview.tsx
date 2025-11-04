import React from 'react';

const Section: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1e2d4d] border-b-2 border-gray-300 pb-1 mb-3 flex items-center">
            <span className="text-red-500 mr-2 text-2xl leading-none">»</span>
            {title}
        </h3>
        {children}
    </div>
);

const Entry: React.FC<{title: string, subtitle?: string, details?: string}> = ({ title, subtitle, details }) => (
    <div className="mb-3">
        <h4 className="font-semibold text-md">{title}</h4>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        {details && <p className="text-sm mt-1 text-gray-700">{details}</p>}
    </div>
);


export const ResumePreview: React.FC = () => {
    return (
        <div className="flex text-gray-800 text-[10pt] leading-normal bg-white min-h-full">
            {/* Left Column */}
            <div className="w-1/3 bg-[#1e2d4d] text-white p-8">
                <h1 className="text-3xl font-semibold leading-tight">Michelle Bontle<br/>Rammila</h1>
                
                <div className="mt-8">
                    <h2 className="text-lg font-semibold border-b border-gray-400 pb-1">Personal Details</h2>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><strong>Age:</strong> 24</li>
                        <li><strong>Location:</strong> Johannesburg, Gauteng</li>
                        <li><strong>Languages:</strong> Sepedi, isiZulu, English</li>
                        <li><strong>Drivers Licence:</strong> No</li>
                    </ul>
                </div>
                
                <div className="mt-8">
                    <h2 className="text-lg font-semibold border-b border-gray-400 pb-1">Online Presence</h2>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="https://github.com/Michellerams" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/michellebontlerammila/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
                
                <div className="mt-8">
                    <h2 className="text-lg font-semibold border-b border-gray-400 pb-1">Technical Proficiencies</h2>
                    <ul className="mt-2 space-y-2 text-sm list-disc list-inside">
                        <li>Python, JavaScript, Java, SQL</li>
                        <li>Generative AI, Large Language Models (LLMs), Natural Language Processing (NLP), Scikit-learn, (Inferred) TensorFlow/Keras</li>
                        <li>AI Prototyping, Prompt Engineering, Dialogflow, Hugging Face Spaces, Streamlit, Gradio, IBM AI Fairness 360, AWS Comprehend</li>
                        <li>Data Science, AI Ethics, Bias Mitigation, Automated Testing (Selenium, Mocha, JUnit)</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold border-b border-gray-400 pb-1">Soft Skills</h2>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                        <li>Time Management</li>
                        <li>Communications</li>
                        <li>Problem solving</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-2/3 p-8">
                <div className="text-right mb-8">
                    <h3 className="text-3xl font-bold tracking-widest text-[#1e2d4d]">CAPACITI</h3>
                </div>
                
                <p className="mb-8 text-sm text-gray-700">
                    A highly driven Software Development graduate with hands-on expertise in Machine Learning (ML), Generative AI, and Natural Language Processing (NLP). Proven ability to design, develop, and deploy AI-powered tools and chatbots. Committed to ethical AI development, agile methodologies, and translating complex data concepts into functional, high-value solutions. Actively seeking a role as a Junior ML Engineer, AI Developer, or Data Scientist.
                </p>

                <Section title="Education">
                    <Entry
                        title="Bachelor of Science in Information Technology"
                        subtitle="Richfield Graduate Institute of Technology | 2019 – 2021"
                    />
                    <Entry
                        title="National Senior Certificate (NSC)"
                        subtitle="Thuto Pele Secondary School | 2018"
                    />
                </Section>

                <Section title="Work Experience">
                     <Entry
                        title="Digital Associate Intern - CAPACITI"
                        subtitle="August 2023 - Present"
                        details="Engineered and deployed no-code prototypes and AI-powered tools leveraging Generative AI APIs and LLMs to automate and address organizational challenges, while actively contributing to an intensive Agile Scrum AI Bootcamp that delivered over four deployed AI/ML projects. Additionally, integrated AI Ethics and Bias Mitigation principles throughout development to ensure responsible and ethical technology implementation."
                    />
                    <Entry
                        title="Software Testing - Sisekelo Institute of Business and Technology"
                        subtitle="Feb 2023 - Jan 2024"
                        details="Performed automated testing using Selenium to ensure software quality and reliability. Developed and executed test cases using Mocha (JavaScript) and conducted JUnit testing for application reliability."
                    />
                </Section>
                
                <Section title="Achievements and Key Projects">
                    <ul className="list-disc list-inside text-sm text-cyan-600 space-y-1">
                        <li><span className="text-gray-800">Aura</span></li>
                        <li><span className="text-gray-800">AI-code-mentor</span></li>
                        <li><span className="text-gray-800">Creative-writer-s-assistant</span></li>
                        <li><span className="text-gray-800">ResumeGenerator</span></li>
                        <li><span className="text-gray-800">SpamSentinel</span></li>
                        <li><span className="text-gray-800">SentiIQ</span></li>
                    </ul>
                </Section>
                
                <Section title="References">
                     <Entry
                        title="Orabile Mogase"
                        subtitle="Orabile.Mogase@capaciti.org.za"
                    />
                     <Entry
                        title="Sabelo Myeni"
                        subtitle="sabelo@sisekelo.co.za"
                    />
                </Section>
            </div>
        </div>
    );
};
