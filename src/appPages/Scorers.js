import React, { useEffect, useState } from 'react'
import Requests from '../services/Requests'


function Scorers(props) {
    const { leagueKey, eventSelected } = props
    const [ results, setResults ] = useState(null)
    const [ startIndex, setStartIndex ] = useState(0)

    useEffect(() => {
      if (!results) {
          (async () => {
          const { statusCode, jsonResponse} = await Requests(`/competitions/${leagueKey}/${eventSelected.toLowerCase()}?limit=1000`)
          if (statusCode === 200) {
            const scorers = jsonResponse.scorers
            setResults(scorers)
          }
        })()
      }
    }, [])


    const handleNext = () => {
      const offset = startIndex + 10 > results.length - 1 ? results.length - 1 : startIndex + 10
      setStartIndex(offset)
    }

    const handlePrevious = () => {
      const offset = startIndex - 10 <= 0 ? 0 : startIndex - 10
      setStartIndex(offset)
    }


    return (
      <div className='shadow-lg'>
          <table className="table table-borderless">
            <thead className="">
                <tr className='bg--black text-white'>
                    <th scope="col"></th>
                    <th scope="col" colSpan={2}>Name</th>
                    <th scope="col" colSpan={2}>Team</th>
                    <th scope="col">Position</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Assists</th>
                    <th scope="col">Penalties</th>
                </tr>
            </thead>
            <tbody>
                {
                    results ? results.slice(startIndex, startIndex + 10).map((item, idx) => (
                         <tr className='text--primary border-bottom'>
                            <th scope="row">
                                <img src={ item.team.crest } height={ 25 }/>
                            </th>
                            <td colSpan={2}>{ item.player.name }</td>
                            <td colSpan={2}>{ item.team.name }</td>
                            <td>{ item.player.position || "-"}</td>
                            <td>{ item.player.nationality || "-"}</td>
                            <td>{ item.goals }</td>
                            <td>{ item.assists || "-" }</td>
                            <td>{ item.penalties || "-"}</td>
                        </tr>
                    )) : (
                        <div className='d-flex justify-content-center w-100 my-5 py-5'>
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
        <div className="bg--accent d-flex justify-content-between py-3 px-4">
            <div className='pointer font-weight-bold text-white' onClick={ handlePrevious }>Previous</div>
            <div className='pointer font-weight-bold text-white' onClick={ handleNext }>Next</div>
        </div>
      </div> 
    )
}

export default Scorers