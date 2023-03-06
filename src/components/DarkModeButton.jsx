import { useDarkModeContext } from "../context/DarkModeContext";

const DarkModeButton = () => {

    const {toggleDarkMode} = useDarkModeContext();


    return (
        <i
            onClick={() => toggleDarkMode()}
            className="fa-solid fa-moon">
        </i>
    )
}

export default DarkModeButton
