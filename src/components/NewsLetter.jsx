import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-16 gap-5">
        {/* text */}
      <div className=" space-y-2">
        <h2 className="text-4xl font-bold">Subscribe to Our NewsLetter</h2>
        <p className="text-slate-600">
          Sign up with your email address to receive news and updates.
        </p>
        <p className="mt-4 text-green-600 text-sm font-medium">
          🎉 Thank you for subscribing!
        </p>
        <p className="text-gray-400 text-xs mt-6">We respect your privacy.</p>
      </div>
      {/* buttons */}
      <div className="join">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
