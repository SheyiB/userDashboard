import './cardbar.css';
import emv from './emv.png'

import {IoCloseCircle ,IoSearchOutline} from 'react-icons/io5';


function Cardbar(){
    return(
        <div className="CT">   
         
                <div className="Top">
                <i className="i1"><IoSearchOutline/></i>
                <input type="text" placeholder="Search"/>
                <i className="i2"><IoCloseCircle/></i>
                </div>

                <div className="Center">
                <div className="C-left">
                <h2> Still no Black Bank Card?</h2>
                <h6>No worries, you can get it right now</h6>
                <button> Get the Card</button>
                </div>

                <div className="C-right">
                <div className="op">
                <span className="pot"><img src={emv}  alt="emv"/> Universal bank</span>
                <span className="Cardname">
                </span>
                
                </div>

                <div className="Belowcard">
                <span>  </span>
                </div>
                
                </div>
                </div>
        </div>
    )
}

export default Cardbar;
