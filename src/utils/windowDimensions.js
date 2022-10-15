/* ***************************************************
 * Project          :   Nina Web-Crawler Dashboard
 * Component        :   WindowDimensions
 * Author           :   Manish Roy
 * Date             :   2021-03-17
 * Description      :   Functions to calculate the user's current window dimensions
*************************************************** */
import { useEffect, useState } from 'react'

/* 
    Function: getWindowDimensions
    Input   : n/a
    Output  : {width, height}
*/
const getWindowDimensions = () =>  {
    // variable declaration
    const { innerWidth: width, innerHeight: height } = window;

    // returns current windows's width and height
    return {width, height};
}
  
/* 
    Function: useWindowDimensions
    Input   : n/a
    Output  : windowDimensions
*/
export default function useWindowDimensions() {
    // variable declarations
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // returns window dimensions
    return windowDimensions;
}