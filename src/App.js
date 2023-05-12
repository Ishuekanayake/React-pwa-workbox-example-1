import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/home';
import TopPicks from './pages/top-picks';
import './styles/style.css';

class App extends React.Component {
   render() {
      return (
         <>   
         <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-picks" element={<TopPicks />} />
         </Routes>
         </Router>
    
         </>
         
      )
   }
}

export default App;