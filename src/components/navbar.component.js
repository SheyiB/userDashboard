import './navbar.css';
import {IoHelpOutline,IoSettingsOutline, IoPulseOutline, IoCalendarClearOutline,  IoPieChartOutline, IoFolderOutline} from 'react-icons/io5';


const Items = props => (
    <span>{props.item}</span>
)

const lest ={
  name : "EE",
  icon1 : <IoFolderOutline/>,
  icon2 : <IoCalendarClearOutline/>,
  icon3 : <IoPieChartOutline/>,
  icon4 : <IoPulseOutline/>,
  icon5 : <IoSettingsOutline/>,
  icon6 : <IoHelpOutline/>
}


function Navbar(){
    return(

        <div className="LeftC">

        <div className="Left-items">
        <Items item={lest.name} />
        </div>

        <div className="Mid-left">
        <Items item={lest.icon1} />
        <Items item={lest.icon2} />
        <Items item={lest.icon3} />
        <Items item={lest.icon4} />
        <Items item={lest.icon5} />
        </div>

        <div className="Left-end">
        <Items item={lest.icon6} />
        </div>

        </div>
        
    )
}

export default Navbar;