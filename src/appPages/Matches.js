import React, { useEffect, useState } from 'react'
import Requests from '../services/Requests'

function Matches(props) {

    const { leagueKey, eventSelected } = props
    const [ results, setResults ] = useState(null)
    const [ startIndex, setStartIndex ] = useState(0)
    const today = new Date()

    
    Date.prototype.yyyymmdd = function() {
      const mm = this.getMonth() + 1; 
      const dd = this.getDate();

      return [this.getFullYear(),
              (mm>9 ? '' : '0') + mm,
              (dd>9 ? '' : '0') + dd
            ].join('-');
    };


    useEffect(() => {
      if (!results) {
          (async () => {
          const { statusCode, jsonResponse} = await Requests(`/competitions/${leagueKey}/${eventSelected.toLowerCase()}`)
          if (statusCode === 200) {
            const matches = jsonResponse.matches
            setResults(matches)
            for (let i = 0; i < matches.length; i++) {
                console.log("here", matches[i].utcDate.split("T")[0] > today.yyyymmdd())

              if (matches[i].utcDate.split("T")[0] > today.yyyymmdd()) {
                let offset;
                const dateToBeSet = matches[i - 1].utcDate.split("T")[0]
                for (let j = 1; j <= 10; j++ ) {
                  const dateHere =  matches[i - j].utcDate.split("T")[0]

                  if (dateHere < dateToBeSet) {
                    offset = j - 1
                    break
                  }
                }
                setStartIndex(i - offset)
                break
              }
            }
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
          <div className='bg--black text-white w-100 d-flex pt-3 pb-2 px-4'>
              <div className='d-flex justify-content-between w-50'>
                <h5 className=''>
                  S no.
                </h5>
                <h5>
                  Home
                </h5>
              </div>
              <h5 className='mx-3'>-</h5>
              <div className='d-flex justify-content-between w-50'>
                <h5>
                  Away
                </h5>
                <h5>
                  Date
                </h5>
              </div>
          </div>
          {
            results ? results.slice(startIndex, startIndex + 10).map((item, idx) => (
              <div className='bg--secondary w-100 d-flex pt-3 pb-2 px-4 border-bottom'>
                  <div className='d-flex justify-content-between w-50'>
                    <p className=''>
                      { startIndex + idx + 1 } 
                    </p>
                    <p className='d-flex m-0 p-0'>
                      <img src={ item.homeTeam.crest } height={ 25 } className="mr-3" />{ item.homeTeam.name }<p className='m-0 p-0 font-weight-bold text--accent mx-3'>{ item.score.fullTime.home || item.score.halfTime.home || 0 }</p>
                    </p>
                  </div>
                  <p className='text-accent'>-</p>
                  <div className='d-flex justify-content-between w-50'>
                    <p className='d-flex m-0 p-0'>
                      <p className='font-weight-bold text--accent mx-3'>{ item.score.fullTime.away || item.score.halfTime.away || 0 }</p>{ item.awayTeam.name }<img src={ item.awayTeam.crest } height={ 25 } className="ml-3" />
                    </p>
                    <i>
                      { item.utcDate.split("T")[0] }
                    </i>
                  </div>
              </div>
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
          <div className="bg--accent d-flex justify-content-between py-3 px-4">
            <div className='pointer font-weight-bold text-white' onClick={ handlePrevious }>Previous</div>
            <div className='pointer font-weight-bold text-white' onClick={ handleNext }>Next</div>
          </div>
      </div>
    )
}

export default Matches