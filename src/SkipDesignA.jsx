import React from 'react';
import { FaArrowRight, FaCheckCircle, FaTruck, FaCalendarAlt, FaExclamationTriangle, FaShieldAlt, FaRecycle, FaClock } from 'react-icons/fa';

const getSkipImage = (size) => {
  if (size === 4) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
  if (size === 20) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg';
  if (size === 40) return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg';
  return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
};

const getSkipDetails = (size) => {
  const details = {
    4: { 
      capacity: '35-45 bin bags',
      ideal: 'Small home clearances, garden waste',
      dimensions: '6ft x 4ft x 3ft'
    },
    20: { 
      capacity: '175-225 bin bags',
      ideal: 'Large renovations, commercial waste',
      dimensions: '12ft x 6ft x 6ft'
    },
    40: { 
      capacity: '350-450 bin bags',
      ideal: 'Major construction, industrial projects',
      dimensions: '20ft x 8ft x 8ft'
    }
  };
  return details[size] || details[4];
};

const SkipDesignA = ({ skips = [], onSelect, selectedId }) => {
  const displaySkips = skips.length > 0 ? skips : [
    { id: 1, size: 4, hire_period_days: 7, price_before_vat: 150, allowed_on_road: true },
    { id: 2, size: 20, hire_period_days: 7, price_before_vat: 250, allowed_on_road: false },
    { id: 3, size: 40, hire_period_days: 7, price_before_vat: 350, allowed_on_road: false }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displaySkips.map((skip) => {
          const selected = skip.id === selectedId;
          const totalPrice = (skip.price_before_vat * 1.2).toFixed(2);
          const details = getSkipDetails(skip.size);
          
          return (
            <div
              key={skip.id}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden transition-all duration-500 ${
                selected 
                  ? 'ring-4 ring-blue-400 ring-offset-4 ring-offset-gray-900 transform scale-[1.02] shadow-2xl shadow-blue-500/20' 
                  : 'shadow-xl hover:shadow-2xl hover:transform hover:scale-[1.02] hover:shadow-blue-500/10'
              }`}
            >
              {/* Premium Badge for Selected */}
              {selected && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white py-2 text-center font-bold flex items-center justify-center gap-2 z-20 text-sm">
                  <FaCheckCircle className="text-base animate-pulse" />
                  <span className="uppercase tracking-wider">Selected</span>
                </div>
              )}
              
              {/* Corner Ribbons */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold shadow-lg text-sm transform rotate-3 hover:rotate-0 transition-transform">
                  {skip.size} YARD
                </div>
              </div>
              
              {!skip.allowed_on_road && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1 text-xs transform -rotate-3 hover:rotate-0 transition-transform">
                    <FaExclamationTriangle className="text-xs animate-pulse" />
                    <span className="uppercase">Off-road only</span>
                  </div>
                </div>
              )}
              
              {/* Enhanced Image Section */}
              <div className="relative h-56 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
                <img
                  src={getSkipImage(skip.size)}
                  alt={`${skip.size} yard skip`}
                  className="relative w-full h-full object-cover drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-2xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {skip.size} Yard Skip
                </h3>
                
                {/* Skip Details */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4 border border-gray-100">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 font-medium text-xs">Capacity:</span>
                      <span className="text-gray-700 font-semibold text-xs">{details.capacity}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 font-medium text-xs">Ideal for:</span>
                      <span className="text-gray-700 font-semibold text-xs">{details.ideal}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 font-medium text-xs">Dimensions:</span>
                      <span className="text-gray-700 font-semibold text-xs">{details.dimensions}</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-blue-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{skip.hire_period_days} Days Hire Period</p>
                      <p className="text-xs text-gray-500">Flexible extension available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FaTruck className="text-green-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Free Delivery & Collection</p>
                      <p className="text-xs text-gray-500">Same day service available</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Price Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 mb-4 border border-blue-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-600">Total Price (inc. VAT)</span>
                    <div className="text-right">
                      <div className="text-2xl font-black text-gray-900">£{totalPrice}</div>
                      <div className="text-xs text-gray-500">£{skip.price_before_vat.toFixed(2)} + VAT</div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-2 pt-2 border-t border-blue-100">
                    Best price guarantee • No hidden fees
                  </div>
                </div>
                
                {/* Enhanced Select Button */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    selected
                      ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500'
                      : 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0'
                  }`}
                  onClick={() => onSelect(selected ? null : skip)}
                >
                  {selected ? (
                    <>
                      <FaCheckCircle className="text-base" />
                      <span>Deselect Skip</span>
                    </>
                  ) : (
                    <>
                      <span>Select This Skip</span>
                      <FaArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
   
    </div>
  );
};

export default SkipDesignA;