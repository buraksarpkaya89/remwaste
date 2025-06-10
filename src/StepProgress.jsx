import React from 'react';

const steps = [
  { label: 'Postcode', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" /></svg>
  ) },
  { label: 'Waste Type', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2m10 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" /></svg>
  ) },
  { label: 'Select Skip', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2l.4 2M7 13h10l1.4-4H6.6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m10 0V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6" /></svg>
  ) },
  { label: 'Permit Check', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" /></svg>
  ) },
  { label: 'Choose Date', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ) },
  { label: 'Payment', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V9m10 0H7" /></svg>
  ) },
];

const StepProgress = () => {
  const activeStep = 2; // Select Skip
  return (
    <div className="w-full flex flex-col items-center pt-8 pb-4">
      <nav className="flex flex-row items-center justify-center gap-2 sm:gap-6 mb-6">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center">
              <div className={`rounded-full p-2 ${idx === activeStep ? 'bg-blue-50 text-blue-700' : 'bg-gray-900 text-gray-400'} shadow-sm mb-1`}>{step.icon}</div>
              <span className={`text-xs font-semibold ${idx === activeStep ? 'text-blue-600' : 'text-gray-400'}`}>{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden sm:block w-8 h-0.5 mx-1 my-2 rounded bg-gray-700" style={{ opacity: 0.3 }} />
            )}
          </React.Fragment>
        ))}
      </nav>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2 drop-shadow">Choose Your Skip Size</h2>
      <p className="text-blue-200 text-base text-center max-w-xl mb-2">Select the skip size that best suits your needs</p>
    </div>
  );
};

export default StepProgress; 