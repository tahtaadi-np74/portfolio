import { NavLink } from "react-router-dom"
import useDarkTheme from "../hooks/DarkMode"

function Header() {
    const [isDarkTheme, toggleDarkTheme] = useDarkTheme()

    return(
        <header className="bg-light dark:bg-dark shadow h-16">
            <nav className="h-full flex flex-row items-center justify-between lg:w-2/3 w-full mx-auto px-5">
                <ul className="flex gap-5 justify-between">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "border-slate-700 dark:border-gray-200 border-b-4 text-black dark:text-white pb-1" : "text-black dark:text-white hover:border-slate-400 hover:border-b-4 pb-1"}>Home</NavLink>
                    </li>
                    <li>
                       <NavLink to="/about" className={({ isActive }) => isActive ? "border-slate-700 dark:border-gray-200 border-b-4 text-black dark:text-white pb-1" : "text-black dark:text-white hover:border-slate-400 hover:border-b-4 pb-1"}>About</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/project" className={({ isActive }) => isActive ? "border-slate-700 dark:border-gray-200 border-b-4 text-black dark:text-white pb-1" : "text-black dark:text-white hover:border-slate-400 hover:border-b-4 pb-1"}>Project</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "border-slate-700 dark:border-gray-200 border-b-4 text-black dark:text-white pb-1" : "text-black dark:text-white hover:border-slate-400 hover:border-b-4 pb-1"}>Contact</NavLink>
                    </li>
                </ul>
                <button onClick={toggleDarkTheme}>{ isDarkTheme ? '☀️' : '🌙'}</button>
            </nav>
        </header>
    )
}

export default Header