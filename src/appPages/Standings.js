import React, { useEffect, useState } from 'react'
import Requests from '../services/Requests'

function Standings(props) {
  
    const { leagueKey, eventSelected } = props
    const [ results, setResults ] = useState(null)
    // const [ startIndex, setStartIndex ] = useState(0)

    useEffect(() => {
      if (!results) {
          (async () => {
          const { statusCode, jsonResponse} = await Requests(`/competitions/${leagueKey}/${eventSelected.toLowerCase()}`)
          if (statusCode === 200) {
            setResults(jsonResponse)
          }
        })()
      }
    }, [])


    return (
      <div className='shadow-lg'>
          <table className="table table-borderless">
            <thead className="">
                <tr className='bg--black text-white'>
                    <th scope="col">Pos.</th>
                    <th scope="col">Team</th>
                    <th scope="col"></th>
                    <th scope="col">P</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                    <th scope="col">F</th>
                    <th scope="col">A</th>
                    <th scope="col">Diff.</th>
                    <th scope="col">Pts.</th>
                    {/* <th scope="col">A</th> */}
                </tr>
            </thead>
            <tbody>
              {
                results ? results.standings[0].table.map((item, idx) => (
                  <tr className='text--primary border-bottom'>
                      <td scope="col">{ item.position }</td>
                      <td scope="col">{ item.team.name }</td>
                      <td scope="col"><img src={ item.team.crest } height={25} className="ml-3" /></td>
                      <td scope="col">{ item.playedGames }</td>
                      <td scope="col" className={ `${item.won && "text--green font-weight-bold"}` }>{ item.won }</td>
                      <td scope="col" className={ `${item.draw && "text--accent font-weight-bold"}` }>{ item.draw }</td>
                      <td scope="col" className={ `${item.lost && "text--red font-weight-bold"}` }>{ item.lost }</td>
                      <td scope="col">{ item.goalsFor }</td>
                      <td scope="col">{ item.goalsAgainst }</td>
                      <td scope="col" className={ `${item.goalDifference > 0 ? "text--green font-weight-bold" : item.goalDifference < 0 ? "text--red font-weight-bold" : ""}` }>{ item.goalDifference }</td>
                      <td scope="col" className={ `${item.points && "text--accent font-weight-bold"}` }>{ item.points }</td>
                  </tr>
                )) : (
                  <div className='d-flex justify-content-center my-5 py-5'>
                      <div className="spinner-grow text--primary d-flex justify-content-center align-items-center" style={{ width: 100, height: 100 }} role="status">
                        <div className='spinner-border text--accent position-absolute' style={{ width: 50, height: 50 }} role="status">
                        </div>
                        <div className='spinner-border text--accent position-absolute' style={{ width: 25, height: 25 }} role="status">
                        </div>
                        <div className='spinner-border text--accent position-absolute' style={{ width: 75, height: 75 }} role="status">
                        </div>
                    </div>
                  </div>
                )
              }
            </tbody>
          </table>
      </div>
    )
}

export default Standings