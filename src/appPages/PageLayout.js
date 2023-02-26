import React from 'react'
import Home from './Home'
import LiveScores from './LiveScores'
import Players from './Players'
import League from './League'
import Transfers from './Transfers'


function PageLayout(props) {

    const { item, mobileView } = props

    return (
        <div className={ `${item.key !== "home" ? "container" : ""}` } >
            {
                item.leagueKey ? (
                    <League { ...item } mobileView={ mobileView } />
                ) : item.key === "liveScores" ? (
                    <LiveScores mobileView={ mobileView } />
                ) : item.key === "players" ? (
                    <Players mobileView={ mobileView } />
                ) : item.key === "transfers" ? (
                    <Transfers mobileView={ mobileView } />
                ) : (
                    <Home mobileView={ mobileView } />
                )
            }
        </div>
    )
}

export default PageLayout