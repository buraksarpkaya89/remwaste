import React from 'react';
import { FaTruck, FaCalendarCheck, FaRoad, FaBan, FaArrowRight, FaTimes, FaCheckCircle } from 'react-icons/fa';

// Helper function for skip images
const getSkipImage = (size) => {
  if (size === 4) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
  if (size === 20) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg';
  if (size === 40) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg';
  return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
};

const SkipDesignB = ({ skips = [], onSelect, selectedId }) => {
  // Sample data if no skips provided
  const defaultSkips = [
    { id: 1, size: 4, hire_period_days: 7, price_before_vat: 150, allowed_on_road: true },
    { id: 2, size: 20, hire_period_days: 7, price_before_vat: 250, allowed_on_road: false },
    { id: 3, size: 40, hire_period_days: 7, price_before_vat: 350, allowed_on_road: false }
  ];
  
  const displaySkips = skips.length > 0 ? skips : defaultSkips;

  const getSkipColor = (size) => {
    if (size === 4) return 'from-emerald-500 to-teal-600';
    if (size === 20) return 'from-blue-500 to-indigo-600';
    if (size === 40) return 'from-purple-500 to-pink-600';
    return 'from-gray-500 to-gray-600';
  };

  const getSkipDescription = (size) => {
    if (size === 4) return 'Perfect for small home projects';
    if (size === 20) return 'Ideal for major renovations';
    if (size === 40) return 'Built for large construction sites';
    return 'Standard skip for general use';
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-2 sm:p-4 space-y-3 sm:space-y-4">
      {displaySkips.map((skip) => {
        const selected = skip.id === selectedId;
        const totalPrice = (skip.price_before_vat * 1.2).toFixed(2);
        const colorGradient = getSkipColor(skip.size);
        
        return (
          <div
            key={skip.id}
            className={`relative group transition-all duration-500 ${
              selected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${colorGradient} rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500 ${
              selected ? 'opacity-40' : 'opacity-10 group-hover:opacity-20'
            }`}></div>
            
            <div className={`relative bg-white rounded-2xl sm:rounded-3xl border-2 overflow-hidden transition-all duration-500 ${
              selected 
                ? 'border-blue-500 shadow-2xl shadow-blue-500/30 ring-2 sm:ring-4 ring-blue-500 ring-offset-2 sm:ring-offset-4 ring-offset-gray-900' 
                : 'border-gray-200 shadow-lg hover:border-gray-300 hover:shadow-xl'
            }`}>
              {/* Selected Banner */}
              {selected && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white py-1.5 sm:py-2 text-center font-bold flex items-center justify-center gap-1 sm:gap-2 z-20 text-xs sm:text-sm">
                  <FaCheckCircle className="text-sm sm:text-base animate-pulse" />
                  <span className="uppercase tracking-wider">Selected</span>
                </div>
              )}
              
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                {/* Mobile Header with Image */}
                <div className={`relative w-full h-48 bg-gradient-to-br ${colorGradient}`}>
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-white/20 backdrop-blur text-white px-2 py-1 rounded-full font-bold shadow-lg text-xs">
                      {skip.size} YARD
                    </div>
                  </div>
                  <img
                    src={getSkipImage(skip.size)}
                    alt={`${skip.size} yard skip`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Mobile Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">{getSkipDescription(skip.size)}</p>
                  
                  {/* Mobile Features */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarCheck className="text-green-600 text-sm" />
                      <span className="text-sm font-medium text-gray-700">{skip.hire_period_days} days hire</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <FaTruck className="text-blue-600 text-sm" />
                      <span className="text-sm font-medium text-gray-700">Free delivery</span>
                    </div>
                    
                    {skip.allowed_on_road ? (
                      <div className="flex items-center gap-2">
                        <FaRoad className="text-green-600 text-sm" />
                        <span className="text-sm font-medium text-green-700">Road placement OK</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <FaBan className="text-red-600 text-sm" />
                        <span className="text-sm font-medium text-red-700">Private property only</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Price and Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-2xl font-black text-gray-900">£{totalPrice}</div>
                      <div className="text-xs text-gray-500">Including VAT</div>
                    </div>
                    
                    <button
                      onClick={() => onSelect(selected ? null : skip)}
                      className={`px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-1.5 text-sm ${
                        selected
                          ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500'
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {selected ? (
                        <>
                          <FaCheckCircle className="text-sm" />
                          <span>Deselect</span>
                        </>
                      ) : (
                        <>
                          <span>Select</span>
                          <FaArrowRight className="text-sm" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden sm:flex items-stretch h-[160px]">
                {/* Left Section - Icon & Size */}
                <div className={`relative flex items-center justify-center bg-gradient-to-br ${colorGradient} text-white w-52 h-full min-w-0 rounded-l-2xl sm:rounded-l-3xl overflow-hidden`}>
                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full font-bold shadow-lg text-xs">
                      {skip.size} YARD
                    </div>
                  </div>
                  {/* Image - fills the entire container */}
                  <img
                    src={getSkipImage(skip.size)}
                    alt={`${skip.size} yard skip`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Middle Section - Details */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-3">{getSkipDescription(skip.size)}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                        <FaCalendarCheck className="text-green-600 text-sm" />
                        <span className="text-sm font-medium text-gray-700">{skip.hire_period_days} days hire</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                        <FaTruck className="text-blue-600 text-sm" />
                        <span className="text-sm font-medium text-gray-700">Free delivery</span>
                      </div>
                      
                      {skip.allowed_on_road ? (
                        <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                          <FaRoad className="text-green-600 text-sm" />
                          <span className="text-sm font-medium text-green-700">Road placement OK</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 bg-red-100 px-3 py-1.5 rounded-full">
                          <FaBan className="text-red-600 text-sm" />
                          <span className="text-sm font-medium text-red-700">Private property only</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-gray-900">£{totalPrice}</div>
                      <div className="text-xs text-gray-500">Including VAT</div>
                    </div>
                    
                    <button
                      onClick={() => onSelect(selected ? null : skip)}
                      className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 transform active:scale-95 ${
                        selected
                          ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500'
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
                      }`}
                    >
                      {selected ? (
                        <>
                          <FaCheckCircle className="text-lg" />
                          <span>Deselect Skip</span>
                        </>
                      ) : (
                        <>
                          <span>Select This Skip</span>
                          <FaArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkipDesignB;