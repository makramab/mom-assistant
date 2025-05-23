import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AssessmentModal from './AssessmentModal';
import Sidebar from './Sidebar';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';
// Add import for remark-gfm if available
// import remarkGfm from 'remark-gfm';

const GEMINI_API_KEY = "AIzaSyB253O79ryjGBUfYba2NYZ2uRnb6s1HWl8";
const GEMINI_MODEL = "gemini-2.0-flash";
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
  showActions?: boolean;
}

interface ChatInterfaceProps {
  initialInput?: string;
  initialMessages?: Message[];
}

const TypingIndicator = () => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
      <span className="text-xs font-medium text-white">AI</span>
    </div>
    <div className="flex-1">
      <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 shadow-sm inline-block">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
      <span className="block text-xs text-gray-500 mt-1">
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  </div>
);

// Utility to normalize Markdown: convert single newlines to double newlines (except for lists/headings)
function normalizeMarkdown(text: string) {
  // Replace single newlines between non-list, non-heading lines with double newlines
  return text.replace(/([^\n])\n([^\n*\-#])/g, '$1\n\n$2');
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialInput, initialMessages }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages || []);
  const [inputMessage, setInputMessage] = useState(initialInput || '');
  const [isTyping, setIsTyping] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const aiRespondedRef = useRef(false);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialInput === undefined) {
      console.log('ChatInterface: initialInput is undefined, skipping effect');
      return; // Wait until initialInput is loaded
    }
    if (aiRespondedRef.current) return; // Prevent double AI response
    aiRespondedRef.current = true;
    console.log('ChatInterface useEffect triggered');
    console.log('initialInput:', initialInput);
    console.log('initialMessages:', initialMessages);
    // Only show default AI greeting if no initial messages
    if (initialMessages && initialMessages.length > 0) return;
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiMessages: Message[] = [
        {
          id: '1',
          type: 'ai',
          content: "Hi! I'm your ChildBright Assistant. How can I help you today?",
          timestamp: new Date()
        }
      ];
      // If initialInput is present, add it as a user message after the AI greeting
      if (initialInput && initialInput.trim()) {
        const userMsg: Message = {
          id: Date.now().toString(),
          type: 'user',
          content: initialInput.trim(),
          timestamp: new Date()
        };
        const newMessages = [
          ...aiMessages,
          userMsg
        ];
        console.log('Setting messages with user input:', newMessages);
        setMessages(newMessages);
        setInputMessage('');
        // Call Gemini API for AI response
        fetchGeminiResponse(initialInput.trim(), newMessages);
      } else {
        console.log('Setting messages with only AI greeting:', aiMessages);
        setMessages(aiMessages);
        setTimeout(() => {
          console.log('Final messages state (AI only):', aiMessages);
        }, 0);
      }
    }, 10);

    // Focus input on mount
    inputRef.current?.focus();
  }, [initialInput, initialMessages]);

  const fetchGeminiResponse = async (prompt: string, currentMessages: Message[]) => {
    setIsTyping(true);
    try {
      const systemPrompt = `
You are ChildBright, an empathetic expert assistant devoted to improving maternal and child health in Indonesia. Always:

- **Infer** the user’s role (Kader, Mother, or Other stakeholder) from their request and immediately deliver content tailored to that role.
- **For Kaders**: share modular e-learning links, quizzes, certificate progress, visit-report templates, growth-chart tools, danger-sign checklists, and sync guidance for government/MEL dashboards.
- **For Mothers**: if needed, ask only for pregnancy stage or child’s age, then provide checklists, nutrition/menu calculators, milestone charts, step-by-step video or infographic guides, gentle reminders for visits/immunizations, and peer/expert chat referrals.
- **For Other stakeholders**: present concise dashboard insights, exportable data filters, integration tips for MEL systems, and high-level program metrics.
- Maintain a **warm, respectful, culturally sensitive tone** either in English or Indonesia depending on the user's language used to ask the question (or concise bilingual use when helpful).
- Keep answers under five sentences unless more detail is explicitly requested.
- Base all health advice on WHO and Indonesian Ministry of Health standards.
- Never steer outside ChildBright’s scope—if a request falls outside, refer users to local health authorities.
- **Always format your responses using Markdown.** Use headings, bold, italics, and lists where appropriate.
- **Always provide sources for your answers.** Cite references, guidelines, or data sources where appropriate.
`;
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
          systemInstruction: systemPrompt,
        }
      });
      console.log('Gemini API full response:', response);
      console.log('Gemini API response.text:', response.text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.text || 'Sorry, I could not generate a response.',
        timestamp: new Date()
      };
      setIsTyping(false);
      setMessages([...currentMessages, aiMessage]);
    } catch (err) {
      setIsTyping(false);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, there was an error contacting the AI service.',
        timestamp: new Date()
      };
      setMessages([...currentMessages, aiMessage]);
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    setMessages(prev => prev.map(msg => ({ ...msg, showActions: false })));
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    fetchGeminiResponse(inputMessage.trim(), newMessages);
  };

  const handleAskQuestionsFirst = () => {
    // Update all existing messages to hide their actions
    setMessages(prev => prev.map(msg => ({ ...msg, showActions: false })));
    
    // Add a new AI message acknowledging the choice
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'ai',
        content: "Great! Let's start with some basic questions. How old is your child?",
        timestamp: new Date()
      }]);
    }, 1000);

    // Focus the input field
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className={`flex flex-col h-screen bg-gray-50 ${isSidebarOpen ? 'lg:pl-80' : ''} transition-[padding] duration-300`}
      >
        {/* Chat header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white"
        >
          <div className="flex items-center">
            <div className={`flex items-center gap-2 py-4 px-4 ${!isSidebarOpen ? 'ml-12' : ''} transition-[margin] duration-300`}>
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600">ChildBright Assistant is online</span>
            </div>
          </div>

          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mr-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-teal-50 border border-teal-100/50 text-sm text-gray-600 hover:text-teal-700 hover:border-teal-200/75 transition-colors duration-200 group"
          >
            <svg 
              className="w-4 h-4 text-teal-500 group-hover:text-teal-600 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </motion.a>
        </motion.div>

        {/* Messages */}
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 overflow-y-auto">
            <div className="relative bg-white min-h-full">
              {/* Messages */}
              <div className="p-8 space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start space-x-4 ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full ${
                          message.type === 'ai' ? 'bg-teal-600' : 'bg-teal-600'
                        } flex items-center justify-center`}
                      >
                        <span className="text-xs font-medium text-white">
                          {message.type === 'ai' ? 'AI' : 'You'}
                        </span>
                      </motion.div>
                      <div className={`flex-1 ${message.type === 'user' ? 'flex flex-col items-end' : ''}`}>
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          className={`${
                            message.type === 'ai' 
                              ? 'bg-teal-50 border border-teal-100 text-teal-900 rounded-2xl rounded-tl-none' 
                              : 'bg-teal-600 rounded-2xl rounded-tr-none text-white'
                          } p-4 shadow-sm max-w-[85%] inline-block`}
                        >
                          <div className={
                            message.type === 'ai'
                              ? 'markdown-body'
                              : 'text-white'
                          }>
                            {message.type === 'ai' ? (
                              <div className="markdown-body">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{normalizeMarkdown(message.content)}</ReactMarkdown>
                              </div>
                            ) : (
                              <ReactMarkdown>{message.content}</ReactMarkdown>
                            )}
                          </div>
                          {message.showActions && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="mt-4 flex flex-wrap gap-3"
                            >
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsAssessmentModalOpen(true)}
                                className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
                              >
                                Launch Assessment
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleAskQuestionsFirst}
                                className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors border border-teal-100"
                              >
                                Ask Questions First
                              </motion.button>
                            </motion.div>
                          )}
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className={`block text-xs text-gray-500 mt-1 ${
                            message.type === 'user' ? 'text-right' : ''
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Chat input */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-100 bg-white px-8 py-4"
        >
          <div className="flex items-center bg-teal-50 hover:bg-teal-100/50 focus-within:bg-white rounded-xl p-3 transition-colors duration-200 shadow-sm border border-teal-100">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-600 placeholder-gray-400 text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className={`ml-3 p-2 rounded-lg transition-colors ${
                inputMessage.trim()
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-teal-100 text-teal-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
      />
    </>
  );
};

export default ChatInterface; 