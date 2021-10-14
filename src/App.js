import React, {useState} from 'react'
import './App.css';
import Mygraph from './components/graph.component';
import Cardbar from './components/cardbar.component';
import Last from './components/last.component'
import Navbar from './components/navbar.component'





function App() {
  
  return (
    <div className="Alpha">

            <div className="Main">

                  <div className="Left">
                  <Navbar/>
                  </div>

                  <div className="Middle">
                  <Cardbar/>
                  <Mygraph />
                  </div>

          
                  <div className="FinalR">
                  <Last/>
                  </div>

            </div>
            
    </div>
      
   
  );
}


export default App;
