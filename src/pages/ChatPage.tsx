import ChatBot from '../components/ChatBot';

const ChatPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white via-teal-50 to-teal-100 py-12 px-2">
      <div className="max-w-2xl mx-auto w-full bg-white rounded-2xl shadow-md border border-gray-200 p-4 md:p-8">
        <ChatBot />
      </div>
    </div>
  );
};

export default ChatPage; 