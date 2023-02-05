import React, { useEffect, useState } from 'react'
import Carouselled from './Carousel'
import { RealTimeRequests } from '../services/Requests'
import { useHistory } from 'react-router-dom'

function Home(props) {
    const { mobileView } = props
    const [ results, setResults ] = useState(null)
    const styledIds = [7, 14, 17, 1]
    const normalIds = [15, 3, 5, 8]
    const carouselIds = [24, 21, 13]
    const breakingIds = [2, 4, 6, 10, 22]
    const history = useHistory()


    useEffect(() => {
       if (!results) {
          (async () => {
          const { statusCode, jsonResponse} = await RealTimeRequests()
          if (statusCode === 200) {
            setResults(jsonResponse)
          }
        })()
      }
    }, [])

    const handleSelected = (item) => {
      sessionStorage.setItem("title", item.title)
      sessionStorage.setItem("author", item.author)
      sessionStorage.setItem("content", item.content)
      sessionStorage.setItem("url", item.url)
      sessionStorage.setItem("image", item.urlToImage)
      sessionStorage.setItem("publishedAt", item.publishedAt)
      sessionStorage.setItem("description", item.description)
      history.push(`/article?q=${item.title.toLowerCase()}`)
    }

    return (
      <div className='mt-2'>
         <div>
           {
             results && (
               <Carouselled items={ results.filter((item, idx) => carouselIds.includes(idx)) } handleSelected={ handleSelected } mobileView={ mobileView } />
             )
           }
         </div>
         <div className='container'>
          <div className='bg--secondary ad-space1 text-center text-muted my-4 w-100'>Ad space</div>
          {
            mobileView ? (
              <>
                <div className='shadow mb-4'>
                    {
                      results && (
                        <div className='rounded-lg p-3 bg--secondary shadow'>
                          <h4 className='font-weight-bold'>Breaking news...</h4>
                          {
                            results.map((item, idx) => breakingIds.includes(idx) && (
                              <div className='d-flex bg--primary rounded my-4 pointer' onClick={() => handleSelected(item)}>
                                  <img src={ item.urlToImage } height={75} className="border rounded w-25"/>
                                  <span className='px-2 py-1 text--primary'>{ item.title }</span>
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                </div>
                <div className='bg--secondary ad-space1 text-center text-muted my-4 w-100'>Ad space</div>
                {
                    results && results.map((item, idx) => [0, ...normalIds].includes(idx) && (
                      <div className="card bg--black text--white border-0 shadow flex-grow-1 w-100 pointer ccd mb-4" onClick={() => handleSelected(item)}>
                        <img src={ item.urlToImage } className="card-img shadow" alt="..." />
                        <div className="card-img-overlay align-self-bottom text--shadow">
                          <p className="card-title font-weight-bold">{ item.title }</p>
                          <span className="card-text">{ item.description }</span>
                        </div>
                      </div>
                  ))
                }
                <div className='bg--secondary ad-space1 text-center text-muted my-4 w-100'>Ad space</div>
                {
                    results && results.map((item, idx) => styledIds.includes(idx) && (
                      <div className="card bg--black border-0 text--white shadow flex-grow-1 w-100 pointer ccd mb-4" onClick={() => handleSelected(item)}>
                        <img src={ item.urlToImage } className="card-img shadow" alt="..." />
                        <div className="card-img-overlay align-self-bottom text--shadow">
                          <p className="card-title font-weight-bold">{ item.title }</p>
                          <span className="card-text">{ item.description }</span>
                        </div>
                      </div>
                  ))
                }
              </>
            ) : (
              <>
                 <div className='row m-0 p-0'>
            <div className='col-7 row p-0'>
              {
                results && results.map((item, idx) => normalIds.includes(idx) && (
                  <div className="custom-card shadow d-flex flex-column col-5 border-top-0 border-left-0 border-right-0 border--accent rounded p-0 m-2 pointer" onClick={() => handleSelected(item)}>
                    <img src={ item.urlToImage } className="custom-card-image" alt="..." />
                    <div className="custom-card-body bg--secondary p-3 flex-grow-1 d-flex flex-column justify-content-between">
                      <h6 className="custom-card-title">{ item.title }</h6>
                      <span className="custom-card-text">{ item.description }</span>
                      {/* <span className='text-right'>
                        <a href={ item.url } className="text--accent">Visit...</a>
                      </span> */}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='col-5 p-0'>
                {
                  results && (
                    <div className='rounded-lg p-3 bg--secondary shadow'>
                      <h4 className='font-weight-bold'>Breaking news...</h4>
                      {
                        results.map((item, idx) => breakingIds.includes(idx) && (
                          <div className='d-flex bg--primary rounded my-4 pointer' onClick={() => handleSelected(item)}>
                              <img src={ item.urlToImage } height={75} className="border rounded w-25"/>
                              <span className='px-2 py-1 text--primary'>{ item.title }</span>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
            </div>
          </div>
          <div className='bg--secondary w-100 ad-space1 text-center text-muted my-5'>Ad space</div>
          <div className='w-100 mb-5 d-flex'>
                {
                  results && (
                    <div className="card bg-dark text--white border--accent shadow-lg flex-grow-1 w-50 pointer ccc" onClick={() => handleSelected(results[0])}>
                      <img src={ results[0].urlToImage } className="card-img cc shadow-lg " alt="..." />
                      <div className="card-img-overlay align-self-bottom">
                        <h5 className="card-title">{ results[0].title }</h5>
                        <p className="card-text">{ results[0].description }</p>
                        {/* <p className="card-text">Last updated 3 mins ago</p> */}
                      </div>
                    </div>
                  )
                }
                <div className='w-50'>
                  {
                    results && results.map((item, idx) =>  styledIds.includes(idx) && (
                      <div className='d-flex bg--secondary rounded border shadow ml-5 mb-4 pointer' onClick={() => handleSelected(item)}>
                          <img src={ item.urlToImage } width={ 150 } className="border-right rounded"/>
                          <div className='p-2'>
                            <p className='text--primary font-weight-bold'>{ item.title }</p>
                          </div>
                      </div>
                    ))
                  }
                </div>
          </div>
              </>

            )
          }
          
         
         </div>
      </div>
    )
}


export default Home