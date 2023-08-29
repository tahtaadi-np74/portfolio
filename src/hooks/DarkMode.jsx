import { useEffect, useState } from "react"

function DarkMode() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        const storedTheme = localStorage.getItem('theme')
        return storedTheme ? JSON.parse(storedTheme) : prefersDarkTheme
    })

    useEffect(() => {
        const applyDarkTheme = () => {
            const darkTheme = 'dark';
            document.documentElement.classList.toggle(darkTheme, isDarkTheme)
        }

        applyDarkTheme()
    }, [isDarkTheme])

    const toggleDarkTheme = () => {
        setIsDarkTheme((prevTheme) => {
            const newTheme = !prevTheme
            localStorage.setItem('theme', JSON.stringify(newTheme))
            return newTheme
        })
    }

    return [isDarkTheme, toggleDarkTheme]
}

export default DarkMode