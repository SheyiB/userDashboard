import './last.css';
import pas from './pas.png'
import {IoCall} from 'react-icons/io5';
import{FaPlay,FaCommentDots,FaBell, FaUserNinja} from 'react-icons/fa'


function Last(){

    return(
    <div className="lastm">
    
        <div className="R-one">
        <i className="bell"><FaBell/></i> 
        
        <span className="usar">
        <span className="dpd">˅  Elijah</span>
        <span className="Avatar"><img src={pas}  alt="emv"/></span> 
        </span>
       
        </div>

        <div className="R-two">

        <div >Charity</div>
        <div className="til">Fundraising to prevent the COVID-19 coronavirus pandemic</div>
        <div className="til2"> 
        <span>$ </span>
        <input type="text"/> 
        <button type="button"> Donate</button>
        </div>

        <div className="til3"> 
        <span>Recieve a report by mail</span> 
        <label className="Myslider secnd"> 
        <input type="checkbox"/> 
        <span className="slider"> 
        </span> 
        </label> 
        
        </div>
        
        <div className="til4"><a href="#">Other programs</a></div>
        </div>

        <div className="R-three">
        <span className="R3">Digit of the day</span>
        <span className="rr"> 8,6 </span>
        <span className='rw'>
        Net profit of Black Bank for 2021
        </span> 
        </div>

        <div className="R-four">
        <div> <i><FaPlay/></i> <span>Watch Video</span></div>
        <div><i><FaCommentDots/></i> </div>
        <div><i> <IoCall/></i> </div>
        </div>
    </div>)
}

export default Last;