import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { samplePrograms, Campaign } from '../samplePrograms';

type Donor = { name: string; amount: number; time: string };
type Prayer = { name: string; text: string; time: string; count: number };

function formatRupiah(amount: number) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

const CampaignDetail: React.FC = () => {
  const { id } = useParams();
  const [showFullStory, setShowFullStory] = useState(false);
  const campaign = samplePrograms.find((p: Campaign) => p.id === Number(id));
  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Campaign Not Found</h2>
        <Link to="/marketplace" className="text-blue-600 hover:underline">Back to Marketplace</Link>
      </div>
    );
  }
  const progress = Math.min((campaign.amount / campaign.target) * 100, 100);
  const storyPreview = campaign.description.split('\n').slice(0, 2).join(' ');
  const storyRest = campaign.description.split('\n').slice(2).join(' ');
  const updates = campaign.updates || [];
  const withdrawals = campaign.withdrawals || [];
  const donors = campaign.donors || [];
  const prayers = campaign.prayers || [];
  const donationCount = campaign.donationCount || 0;
  const prayerCount = campaign.prayerCount || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col items-center pb-32"
    >
      {/* Image with back arrow */}
      <div className="relative w-full max-w-lg mx-auto">
        <img src={campaign.image} alt={campaign.title} className="w-full h-56 object-cover rounded-b-2xl" />
        <Link to="/marketplace" className="absolute top-4 left-4 bg-white/80 hover:bg-white rounded-full p-2 shadow">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </Link>
        {campaign.urgent && (
          <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">URGENT</span>
        )}
      </div>
      {/* Org info */}
      <div className="flex items-center gap-3 mt-4 mb-2 w-full max-w-lg px-4">
        <img src={campaign.orgLogo || 'https://ui-avatars.com/api/?name=ORG'} alt={campaign.organization} className="w-10 h-10 rounded-full border-2 border-white shadow" />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-800">{campaign.organization}</span>
            {campaign.verified && (
              <span className="ml-1 text-blue-600" title="Verified">
                <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </span>
            )}
            <span className="ml-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">ORG</span>
          </div>
          <div className="text-xs text-gray-500">Identitas terverifikasi</div>
        </div>
      </div>
      {/* Title */}
      <div className="w-full max-w-lg px-4">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h1>
      </div>
      {/* Donation highlight */}
      <div className="w-full max-w-lg px-4 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Donasi tersedia</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" /></svg>
        </div>
        <div className="text-2xl font-bold text-red-500">{formatRupiah(campaign.amount)}</div>
      </div>
      {/* Alert/info box */}
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg px-4 py-2 text-sm">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
          Semakin banyak donasi yang tersedia, semakin besar bantuan yang bisa disalurkan oleh gerakan ini.
        </div>
      </div>
      {/* Progress bar and stats */}
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs text-gray-500">Terkumpul</div>
          <div className="text-xs text-gray-500">Target: <span className="font-medium text-gray-700">{formatRupiah(campaign.target)}</span></div>
          <div className="text-xs text-gray-500">Sisa hari: <span className="font-bold text-gray-700">{campaign.daysLeft}</span></div>
        </div>
        <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-right text-blue-700 mt-1 font-medium">{progress.toFixed(0)}%</div>
      </div>
      {/* Story section */}
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="font-bold text-gray-800 mb-1">Cerita Penggalangan Dana</div>
        <div className="text-xs text-gray-500 mb-2">{campaign.storyDate}</div>
        <div className="text-gray-700 mb-2">
          <span className="font-semibold">{storyPreview}</span>
          {!showFullStory && storyRest && (
            <>
              <span className="text-gray-400"> ...</span>
              <button className="text-blue-600 ml-2 text-sm underline" onClick={() => setShowFullStory(true)}>Baca selengkapnya</button>
            </>
          )}
          <AnimatePresence initial={false}>
            {showFullStory && (
              <motion.div
                key="storyRest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <span className="block mt-2 text-gray-700">{storyRest}</span>
                <button className="text-blue-600 ml-2 text-sm underline" onClick={() => setShowFullStory(false)}>Tutup</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Updates, Withdrawals, Fundraiser, Donations, Prayers sections (mocked) */}
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="font-bold text-gray-800 mb-2">Kabar Terbaru <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-bold">{updates[0]?.count || 0}</span></div>
        <div className="text-xs text-gray-500 mb-2">Terakhir update • {updates[0]?.date || '-'}</div>
      </div>
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="font-bold text-gray-800 mb-2">Pencairan Dana <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-bold">{withdrawals[0]?.count || 0}</span></div>
        <div className="text-xs text-gray-500 mb-2">Terakhir pencairan dana • {withdrawals[0]?.date || '-'}</div>
      </div>
      <div className="w-full max-w-lg px-4 mb-4">
        <div className="font-bold text-gray-800 mb-2">Donasi <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-bold">{donationCount}</span></div>
        {donors.map((donor: Donor, i: number) => (
          <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-sm capitalize">{donor.name}</div>
              <div className="text-xs text-gray-600">Berdonasi sebesar <span className="font-bold text-gray-900">{formatRupiah(donor.amount)}</span></div>
              <div className="text-xs text-gray-400">{donor.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-lg px-4 mb-32">
        <div className="font-bold text-gray-800 mb-2">Doa-doa Orang Baik <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-bold">{prayerCount}</span></div>
        {prayers.map((prayer: Prayer, i: number) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <div className="font-semibold text-gray-700 text-sm">{prayer.name}</div>
              <div className="text-xs text-gray-400 ml-2">{prayer.time}</div>
            </div>
            <div className="text-gray-700 text-sm mb-2">{prayer.text}</div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="font-semibold">{prayer.count} orang</span> mengaminkan doa ini
              <button className="flex items-center gap-1 hover:text-blue-600"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg> Aamiin</button>
              <button className="flex items-center gap-1 hover:text-blue-600"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-6 0v8a3 3 0 106 0V8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0l-2 2m2-2l2 2" /></svg> Bagikan</button>
            </div>
          </div>
        ))}
      </div>
      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center justify-center gap-2 py-3 z-50">
        <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200 hover:bg-blue-100 transition-colors text-sm" title="Share">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-6 0v8a3 3 0 106 0V8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0l-2 2m2-2l2 2" /></svg>
        </button>
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-pink-300 text-pink-700 font-semibold bg-white hover:bg-pink-50 transition-colors text-base">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
          Donasi Otomatis
        </button>
        <button className="flex items-center gap-2 px-8 py-2 rounded-full bg-pink-600 text-white font-bold shadow hover:bg-pink-700 transition-colors text-base">
          Donasi
        </button>
      </div>
    </motion.div>
  );
};

export default CampaignDetail; 