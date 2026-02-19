import { useContext } from 'react'
import { NavbarContext } from '../context/NavbarContext'
import { ThemeContext } from '../context/ThemeContext'

const Nabvar = () => {
    const { name } = useContext(NavbarContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`Nav ${theme}`}>
            <h1>{name}</h1>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>

            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    )
}

export default Nabvar
