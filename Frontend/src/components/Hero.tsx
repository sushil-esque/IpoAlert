function Hero() {
  return (
    <div className="mt-35">
      <h2 className="text-5xl font-bold text-center mx-auto">
        Never miss any <span className="text-[#5177f6]">IPO opportunity</span>{" "}
        again
      </h2>
      <p className="text-center mt-10 text-lg">
        Receive automated email notifications for upcoming IPOs.
      </p>

      {/* Sign up with Google Button */}
      <div className="flex justify-center mt-8">
        <a
          href={`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/auth/google`}
          className="group flex items-center gap-3 bg-white dark:bg-[#1a1a2e] border border-gray-300 dark:border-gray-600 rounded-full px-6 py-3 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {/* Google Logo */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            Sign up with Google
          </span>
        </a>
      </div>

      {/* Gmail-like Email Preview */}
      <div className="mt-14 max-w-2xl mx-auto">
        {/* Gmail Window Chrome */}
        <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-black/40 border border-gray-200 dark:border-gray-700">
          {/* Gmail Top Bar */}
          <div className="bg-white dark:bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
            {/* Window dots */}
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            {/* Gmail search bar */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-[#eaf1fb] dark:bg-[#2a2a4a] rounded-full px-4 py-1.5 flex items-center gap-2 w-full max-w-sm">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Search mail
                </span>
              </div>
            </div>
          </div>

          {/* Email Header (Subject Line) */}
          <div className="bg-white dark:bg-[#1a1a2e] px-5 py-3 border-b border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <h3 className="font-semibold text-base text-gray-800 dark:text-gray-100">
                🚀 IPO Alert: 2 Update(s) for Today!
              </h3>
            </div>
            <div className="ml-8 mt-1 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                Inbox
              </span>
            </div>
          </div>

          {/* Sender Info */}
          <div className="bg-white dark:bg-[#1a1a2e] px-5 py-3 flex items-start gap-3 border-b border-gray-100 dark:border-gray-700/50">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#5177f6] flex items-center justify-center text-white font-bold text-sm shrink-0">
              IA
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    IPO Alert
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                    &lt;ipoalert@notify.com&gt;
                  </span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  9:00 AM
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                to me
              </p>
            </div>
          </div>

          {/* Email Body — mirrors the backend HTML */}
          <div className="bg-white dark:bg-[#1e1e36] px-6 py-5">
            <div style={{ fontFamily: "Arial, sans-serif" }}>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                📢 Current IPO alerts
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Here are the IPOs you can apply for right now:
              </p>

              <ul className="list-none p-0 m-0 space-y-3">
                {/* IPO Opening Today */}
                <li>
                  <div className="rounded-md p-4 border-l-4 border-l-[#4CAF50] bg-[#f9f9f9] dark:bg-[#252545]">
                    <strong className="text-base text-gray-900 dark:text-gray-100">
                      Hexaware Technologies Ltd
                    </strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
                      🚀 Big News! This IPO is officially OPEN for subscription
                      today. Time to get your funds ready!
                    </p>
                    <div className="mt-2 space-y-0.5">
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        🗓 <strong>Open Date:</strong> Fri Mar 21 2026
                      </span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        ⌛ <strong>Close Date:</strong> Tue Mar 25 2026
                      </span>
                    </div>
                  </div>
                </li>

                {/* IPO Closing Today */}
                <li>
                  <div className="rounded-md p-4 border-l-4 border-l-[#F44336] bg-[#f9f9f9] dark:bg-[#252545]">
                    <strong className="text-base text-gray-900 dark:text-gray-100">
                      Ather Energy Ltd
                    </strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
                      ⏰ LAST CHANCE! This IPO is CLOSING today. If you haven't
                      filled out the form, hurry up—the deadline is approaching!
                    </p>
                    <div className="mt-2 space-y-0.5">
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        🗓 <strong>Open Date:</strong> Tue Mar 18 2026
                      </span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        ⌛ <strong>Close Date:</strong> Fri Mar 21 2026
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-5 font-medium">
                Don't miss the deadlines!
              </p>

              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <small className="text-xs text-gray-400 dark:text-gray-500">
                This is an automated reminder.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
