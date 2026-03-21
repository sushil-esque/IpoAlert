import { useThemeContext } from "../context/ThemeContext"

function Navbar() {
    const {toggleTheme, darkMode} = useThemeContext()
  return (
    <div className="shadow-sm fixed top-0 z-70  w-full  h-[70px]  bg-white/30 dark:bg-[#0f172b]/30 backdrop-blur-[10px] border-b-[0.1px] border-b-white/10">
       <div className="container mx-auto">
        <button onClick={toggleTheme}>toggle THeme</button>

       </div>
    </div>
  )
}

export default Navbar