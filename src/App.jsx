import { useEffect, useState } from 'react';
import SkipDesignA from './SkipDesignA';
import SkipDesignB from './SkipDesignB';
import StepProgress from './StepProgress';
import { MdOutlineColorLens } from 'react-icons/md';
import './App.css';

function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [design, setDesign] = useState('A');
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
    setSelectedSkipId(skip ? skip.id : null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 flex flex-col relative">
      <StepProgress />
      {/* Switch Design Icon Button */}
      <button
        className="fixed top-6 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        onClick={() => setDesign(design === 'A' ? 'B' : 'A')}
        aria-label="Switch Design"
      >
        <MdOutlineColorLens className="w-6 h-6" />
      </button>
      <main className="flex-1 flex flex-col items-center justify-start py-8">
        {loading && <div className="text-lg text-gray-600">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && (
          <>
            {design === 'A' ? (
              <SkipDesignA skips={skips} onSelect={handleSelect} selectedId={selectedSkipId} />
            ) : (
              <SkipDesignB skips={skips} onSelect={handleSelect} selectedId={selectedSkipId} />
            )}
          </>
        )}
        {selectedSkip && (
          <div className="fixed bottom-4 right-4 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
            {selectedSkip.size} yard skip selected!
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
