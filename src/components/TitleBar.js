import { faCaretSquareDown, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faArrowAltCircleDown, faBars, faChevronCircleDown, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { NavOptions } from '../constants/NavConstants'
// import Requests from '../services/Requests'
import { useHistory } from 'react-router-dom'
import Logo from '../assets/Logo.svg'


function TitleBar(props) {
    const { scrollPosition, mobileView } = props
    const [ visibleSearch, setVisibleSearch ] = useState(false)
    const [ hovered, setHovered ] = useState(null)
    const [ selected, setSelected ] = useState("Home")
    const [ displayMenu, setDisplayMenu ] = useState(null)
    const [ secondHovered, setSecondHovered ] = useState(null)
    const [ secondSelected, setSecondSelected ] = useState(null)
    const [ collapse, setCollapse ] = useState(true)
    const history = useHistory()

    const dateToday = new Date()
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const day = days[ dateToday.getDay() ]
    const month = months[ dateToday.getMonth() ]
    const date = dateToday.getDate()
    const year = dateToday.getFullYear()
    


    return (
        <div className='shadow-lg'>
            <div className={ `px-${ mobileView ? "2" : "5 mx-5"} d-flex justify-content-between align-items-center pt-3` }>
                <div className='d-flex align-items-center'>
                    {
                        mobileView && (
                            <div className='pl-2 d-flex flex-column'>
                                <span className='text--accent my-0 py-0'>{ day }</span>
                                <span className='my-0'>{ date } { month.slice(0, 3) }</span>
                            </div>
                        )
                    }
                    {/* <FontAwesomeIcon icon={ faSearch } size="lg" onClick={() => setVisibleSearch(!visibleSearch)} className="pointer"/>
                    <input className={ `bg-${ visibleSearch ? "-secondary" : "transparent" } position-absolute border-0 text-white mx-4 p-2 rounded-sm w-25` } disabled={ !visibleSearch } /> */}
                </div>
                <img src={ Logo } width={ mobileView ? 150 : 260 } height={ mobileView ? 100 : 130 } />
                <div className='d-flex justify-content-between align-items-center'>
                    { props.children }
                </div>
            </div>
            <div className={ `${ mobileView ? "mx-2" : "mx-5 px-5 pb-3" } d-flex` }>
                {
                    mobileView || (
                        <div className='border-right pr-4 mr-3'>
                            <h5 className='text--accent my-0'>{ day }</h5>
                            <h6 className='my-0 py-1'>{ date } { month }, { year }</h6>
                        </div>
                    )
                }
                {
                    NavOptions.map(item => (
                        <div className={ `py-2 px-4 pointer mx-${ mobileView ? "1" : "3" } my-2 ${[hovered, selected].includes(item.title) ? "bg--accent rounded font-weight-bold text-white shadow" : ""}` } onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)} onClick={() => {setDisplayMenu(null); setSelected(item.title); item.subItems ? setDisplayMenu(item.subItems) : history.push(item.path)}}>
                            { item.title }
                        </div>
                    ))
                }
            </div>
    
    
            {
                displayMenu && <div className={ `bg--accent px-5 w-100 shadow-lg row py-2 zz d-${ mobileView ? "block" : "flex" }` } onMouseLeave={() => setDisplayMenu(null)}>
                    {
                        displayMenu.map(item => (
                            <div className={ `py-2 px-4 pointer ml-5 my-2 font-weight-bold ${[secondHovered, secondSelected].includes(item.title) ? "bg--white rounded-pill text--accent shadow" : "bg--accent text-white"}` } onMouseEnter={() => { setSecondHovered(item.title);}} onMouseLeave={() => setSecondHovered(null)} onClick={() => {setDisplayMenu(null); history.push(item.path)}}>
                                { item.title }
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default TitleBar