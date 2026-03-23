

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full backdrop-blur-[10px] shadow-sm  mt-24 py-10 border-t border-gray-300 dark:border-white/20 bg-[#eeeeee]/30 dark:bg-[#0f172b]/30">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 select-none">
          
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
            IPO<span className="text-[#5177f6]">Notify</span>
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} IPOAlert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
