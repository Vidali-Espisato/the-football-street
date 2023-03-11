import React from 'react'

// function Carousel(props) {
//     const { items } = props

//     return (
//         <div className=''>
//             <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
//                     <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//                     <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//                 </ol>
//                 <div className="carousel-inner cc">
//                     {
//                         items && items.map((item, idx) => (
//                             <div className={ `carousel-item ${!idx && "active"}` }>
//                             <img src={ item.image } className="d-block w-100" alt="..."/>
//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5>{ item.title }</h5>
//                                 <p>{ item.description }</p>
//                             </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </button>
//                 </div>

//         </div>
//     )
// }

import Carousel from 'react-bootstrap/Carousel';

function Carouselled({items, handleSelected, mobileView}) {
  
    return (
    <Carousel variant="dark" className='bg--black'>
            {
                items && items.map((item, idx) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cc"
                            src={ item.urlToImage } 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {
                                mobileView ? (
                                    <>
                                        <h5 onClick={() => handleSelected(item)} className='pointer text-weight-bold text--white text--shadow'>{ item.title }</h5>
                                        <span onClick={() => handleSelected(item)} className='pointer text--white text-weight-bold text--shadow'>{ item.description }</span>
                                    </>
                                ) : (
                                    <>
                                        <h3 onClick={() => handleSelected(item)} className='pointer text-weight-bold text--white text--shadow'>{ item.title }</h3>
                                        <p onClick={() => handleSelected(item)} className='pointer text--white text-weight-bold text--shadow'>{ item.description }</p>
                                    </>
                                )
                            }

                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
    </Carousel>
  );
}

// export default UncontrolledExample;



export default Carouselled