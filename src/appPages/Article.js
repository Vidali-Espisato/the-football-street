import React, { useEffect, useState } from 'react'
import articleGenerator from '../services/articleGenerator';
import { ScrapeRequest } from '../services/Requests';

function Article(props) {
    const { mobileView } = props
    const [ actualContent, setActualContent ] = useState([])
    const date = sessionStorage.getItem("publishedAt")
    const [ year, month, day ] = date.split("T")[0].split("-")

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    useEffect(() => {
        (async () => {
          const { statusCode, jsonResponse} = await ScrapeRequest(sessionStorage.getItem("url"))
          if (statusCode === 200) {
              try {
                  setActualContent(articleGenerator(jsonResponse.data))
              } catch {
                  console.log("error at article")
              }
          }
        })()
    }, [])


    return (
        <div className='container shadow-lg'>
            <img className='w-100 shadow-lg' src={ sessionStorage.getItem("image") } />
            <h1 className='font-weight-bold mt-4'>{ sessionStorage.getItem("title") }</h1>
            <div className='text-right mx-3'>
                <p className='text--accent font-weight-bold m-0'>- { sessionStorage.getItem("author") }</p>
                <p className='text--green m-0'>{ day } { months[parseInt(month) - 1] }, { year }</p>
            </div>
            <h4 className='text-muted font-italic my-5 px-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... { sessionStorage.getItem("description") }</h4>
            {
                mobileView && (
                    <div className={ `bg--secondary ad-space1 text-center text-muted my-5 mx-${mobileView ? "2" : "4"}` }>Ad space</div>
                )
            }
            <div className='row px-4'>
                <div className={ mobileView || 'col-8' }>
                    {
                        actualContent.length ? (
                            <>
                                {
                                    actualContent[0].map(item => (
                                        <p>
                                            { item }
                                        </p>
                                    ))
                                }
                            </>
                        ) : (
                            <p className=''>{ sessionStorage.getItem("content").split("…")[0] + "..." }</p>
                        )
                    }
                </div>
                {
                    mobileView || (
                        <div className='bg--secondary ad-space3 text-muted col-3 ml-5'>Ad space</div>
                    )
                }
            </div>
            {/* <div className='bg--secondary ad-space1 text-center text-muted my-5'>Ad space</div> */}
            <div className={ mobileView || 'px-4' }>
                {
                    actualContent.length ? (
                        <>
                            {
                                actualContent[1].map(item => (
                                    <p>
                                        { item }
                                    </p>
                                ))
                            }
                        </>
                    ) : <></>
                }
            </div>
            <div className={ `bg--secondary ad-space1 text-center text-muted my-5 mx-${mobileView ? "2" : "4"}` }>Ad space</div>
            <div className={ mobileView || 'px-4' }>
                {
                    actualContent.length ? (
                        <>
                            {
                                actualContent[2].map(item => (
                                    <p>
                                        { item }
                                    </p>
                                ))
                            }
                        </>
                    ) : <></>
                }
            </div>
            <div className={ `row ${mobileView || 'px-4'}` }>
                <div className='bg--secondary ad-space3 text-muted col-3 ml-4'>Ad space</div>
                <div className='col-8'>
                    {
                        actualContent.length ? (
                            <>
                                {
                                    actualContent[3].map(item => (
                                        <p>
                                            { item }
                                        </p>
                                    ))
                                }
                            </>
                        ) : <></>
                    }
                </div>
            </div>
            <div className={ mobileView || 'px-4'}>
                {
                    actualContent.length ? (
                        <>
                            {
                                actualContent[4].map(item => (
                                    <p>
                                        { item }
                                    </p>
                                ))
                            }
                        </>
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default Article