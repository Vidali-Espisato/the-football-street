import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Toggle(props) {
    const { theme, setTheme, className, mobileView } = props

    return (
        <div className={ `dark-toggle` } >  
            <div className={ `d-flex bg-${ theme === "light" ? "light" : "-accent justify-content-end" } rounded-pill border--accent toggle-button${mobileView ? "-sm mx-2" : ""}` } onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <div className={ `rounded-circle bg-${ theme === "light" ? "-accent" : "-extra" } toggle-circle${mobileView ? "-sm" : ""} d-flex justify-content-center align-items-center` }>
                    <FontAwesomeIcon icon={ theme === "light" ? faSun : faMoon } size={ mobileView ? "sm" : "1x" } className="text--white" />
                </div>
            </div>
        </div>
    )
}

export default Toggle
