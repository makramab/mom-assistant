import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-80 bg-gray-50/80 border-r border-gray-200 flex flex-col z-30"
      >
        {/* Header Section with Toggle and New Chat */}
        <div className="p-4 grid grid-cols-[auto,1fr] items-center gap-2">
          {/* Placeholder for toggle button to maintain layout */}
          <div className="h-8 w-8" />

          <button
            onClick={() => {}} // TODO: Implement new chat functionality
            className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm hover:bg-white transition-colors text-gray-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Chat
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-2.5">
            <h2 className="px-2 mb-2 text-xs font-medium text-gray-500">Recent Chats</h2>
            <div className="space-y-1">
              {[
                "Mother's Growth Monitoring",
                "Kader E-Learning Progress",
                "Program Dashboard Insights"
              ].map((label, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white transition-colors text-left text-gray-700"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="border-t border-gray-200 p-4">
          <button className="w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white transition-colors text-left text-gray-700">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </div>
      </motion.div>

      {/* Toggle Button - Always visible */}
      <div 
        className={`fixed top-0 left-0 h-[57px] flex items-center z-40 ${
          isOpen ? 'pl-4' : 'pl-4'
        }`}
      >
        <button
          onClick={onToggle}
          className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <svg 
            className="w-5 h-5 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar; 