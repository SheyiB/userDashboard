import { Component} from 'react'
import './graph.css';





function Mygraph(){
    return(
        <div className="Graphmain">   
        <div className="Bone">
        <span className="Tr">Investment</span>
        <label className="Myslider"> 
        <input type="checkbox"/> 
        <span className="slider"></span> 
        </label>
        </div>
        
        
    </div>

    )
}

export default Mygraph;
