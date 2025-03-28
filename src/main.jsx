import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes >  {/* Instead of Switches we can use it to route betn paths  */}
         <Route path='*' Component={App}/>
      </Routes>
      
    </Router>
  </StrictMode>,
)
