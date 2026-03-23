import { getCurrentIpo } from "@/api/ipo"
import { useQuery } from "@tanstack/react-query"

export default function CurrentIpos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentIpos"],
    queryFn: getCurrentIpo,
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Current IPOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full max-w-6xl mx-auto py-8 px-4 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-red-50 dark:bg-red-500/10 text-red-600 border border-red-200 dark:border-red-500/20 rounded-2xl p-6 text-center max-w-md">
          <svg className="w-10 h-10 mx-auto mb-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-lg font-bold mb-1">Failed to load IPOs</h3>
          <p className="text-sm opacity-80">We encountered an error while fetching the current IPOs. Please try again later.</p>
        </div>
      </div>
    );
  }

  const ipos = data?.data || [];

  if (ipos.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto py-8 px-4 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center max-w-md">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">No Active IPOs</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">There are currently no IPOs open for subscription. Check back later!</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full mt-10 max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl text-center font-bold mb-6 text-gray-900 dark:text-white">Currently Open IPOs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ipos.map((ipo) => {
          const isClosingSoon = 
            new Date(ipo.closeDate).getTime() - new Date().getTime() < 86400000 * 2; // Less than 2 days
            
          return (
            <div 
              key={ipo._id} 
              className="group flex flex-col bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:shadow-[#5177f6]/20 border border-gray-100 dark:border-gray-800 hover:border-[#5177f6]/50 dark:hover:border-[#5177f6]/50 transition-all duration-300 relative overflow-hidden"
            >
             
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white ">
                  {ipo.name}
                </h3>
                <span className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ml-3 ${
                  isClosingSoon 
                    ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-100 dark:border-red-500/20" 
                    : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                }`}>
                  {isClosingSoon ? "Closing Soon" : "Open"}
                </span>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-semibold uppercase tracking-wider">Issue Manager</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {ipo.issueManager || "N/A"}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-semibold uppercase tracking-wider">Total Issued Units</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {Number(ipo.issuedUnit) ? Number(ipo.issuedUnit).toLocaleString() : ipo.issuedUnit}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 mt-auto border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Opening Date</p>
                    <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                      {formatDate(ipo.openDate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Closing Date</p>
                    <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                      {formatDate(ipo.closeDate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}