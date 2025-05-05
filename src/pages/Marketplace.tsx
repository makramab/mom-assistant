import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { samplePrograms } from '../samplePrograms';

function formatRupiah(amount: number) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

const Marketplace: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      <div className="w-full bg-white rounded-none shadow-none px-0">
        <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center mt-4">Financing & MEL Matchmaking Marketplace</h1>
        <p className="text-gray-600 text-center mb-6">
          Discover, connect, and fund impactful community health programs. Browse program profiles, funding opportunities, and track real-time progress with integrated MEL tools.
        </p>
      </div>
      {/* Fullscreen grid for marketplace cards */}
      <div className="w-full px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePrograms.map((program: any, idx: number) => {
            const progress = Math.min((program.amount / program.target) * 100, 100);
            return (
              <div key={program.id} className={`flex flex-col bg-blue-50/60 rounded-xl shadow-sm border border-blue-100 overflow-hidden ${idx === 0 ? 'ring-2 ring-blue-300' : ''}`}>
                <div className="flex">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-36 h-28 object-cover flex-shrink-0 rounded-l-xl"
                  />
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{program.title}</h2>
                      <div className="text-sm text-blue-700 font-medium mb-2">{program.organization}</div>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <div>
                        <div className="text-xs text-gray-500">Terkumpul</div>
                        <div className="text-lg font-semibold text-blue-800">{formatRupiah(program.amount)}</div>
                        <div className="text-xs text-gray-500 mt-1">Target: <span className="font-medium text-gray-700">{formatRupiah(program.target)}</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Sisa hari</div>
                        <div className="text-lg font-bold text-gray-700">{program.daysLeft}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="px-4 pb-3 pt-2">
                  <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-right text-blue-700 mt-1 font-medium">{progress.toFixed(0)}%</div>
                </div>
                {/* Action buttons row */}
                <div className="flex justify-between items-center px-4 pb-4">
                  <div className="flex gap-2">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors text-sm"
                      title="Share"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-6 0v8a3 3 0 106 0V8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0l-2 2m2-2l2 2" /></svg>
                      Share
                    </button>
                    <Link
                      to={`/marketplace/${program.id}`}
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors text-sm"
                      title="Details"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" /></svg>
                      Details
                    </Link>
                  </div>
                  <button
                    className="px-5 py-2 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-colors text-sm"
                  >
                    Donate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace; 