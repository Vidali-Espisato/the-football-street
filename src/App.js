import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import { Toggle } from './components';
import TitleBar from './components/TitleBar';
import AppPages from './appPages'
import { BrowserRouter as Router } from 'react-router-dom';
import useWindowDimensions from './utils/windowDimensions';


function App() {
  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [ theme, setTheme ] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');
  const [ scrollPosition, setScrollPosition ] = useState(0)
  const { width, height } = useWindowDimensions()
  const [ mobileView, setMobileView ] = useState(width <= 768)

  useEffect(() => {
      setMobileView(width <= 768)
  }, [ width ])
  
  return (
    <div className="App" data-theme={ theme }>
      <Router>
            <TitleBar scrollPosition={ scrollPosition } mobileView={ mobileView }>
                <Toggle theme={ theme } setTheme={ setTheme } mobileView={ mobileView }/>
            </TitleBar>
            <AppPages mobileView={ mobileView }/>
      </Router>
    </div>
  );
}

export default App;
