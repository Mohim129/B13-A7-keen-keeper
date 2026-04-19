import React from "react";

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h2 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-[#244D3F]/40 mb-6 md:mb-10 transition-all">
          404
        </h2>


        <h3 className="text-2xl md:text-3xl font-bold text-[#244D3F] mb-4">
          Page Not Found.
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
          It looks like the link you followed has been moved or no longer exists.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-[#244D3F] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md active:scale-95 w-full sm:w-auto"
        >
          Back to Homepage
        </button>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#244D3F] opacity-20"></div>
          <div className="w-2 h-2 rounded-full bg-[#244D3F] opacity-40"></div>
          <div className="w-2 h-2 rounded-full bg-[#244D3F] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
