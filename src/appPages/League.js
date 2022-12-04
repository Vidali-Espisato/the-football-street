import React, { useState } from 'react'
import Matches from './Matches'
import Scorers from './Scorers'
import Standings from './Standings'


function League({ leagueKey, leagueIcon, title }) {
    const events = [ "MATCHES", "STANDINGS", "SCORERS"]
    const [ eventSelected, setEventSelected ] = useState(events[1])

    const eventProps = { leagueKey, eventSelected }

    return (
        <div className='my-4'>
            <div className='d-flex align-items-center mb-3'>
                <div className='img-container rounded-circle mr-4 bg-white'>
                    <img src={ leagueIcon } className="leagueImg"/>
                </div>
                <h1 className='font-weight-bold'>{ title.toUpperCase() }</h1>
            </div>
            <div className='d-flex justify-content-between'>
                {
                    events.map((event, idx) => (
                        <h4 className={ `py-2 px-4 font-weight-bold text-center ${ idx ? "ml-4" : ""} ${ eventSelected === event ? "bg--accent text-white": "bg--secondary shadow"} flex-grow-1 border--accent pointer` } onClick={() => setEventSelected(event)}>{ event }</h4>
                    ))
                }
            </div>
            <div className='mt-4'>
                {
                    eventSelected === "MATCHES" ? (
                        <Matches { ...eventProps } />
                    ) : eventSelected === "SCORERS" ? (
                        <Scorers { ...eventProps } />
                    ) : (
                        <Standings { ...eventProps } />
                    )
                }
            </div>
        </div>
    )
}

export default League