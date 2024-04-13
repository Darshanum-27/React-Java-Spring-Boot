import { Outlet, Link } from "react-router-dom";
import Home from './Home'
import logo from './logo.jpeg'
import pixel from './pixel.jpeg'
import ColorInversionFooter from "./ColorInversionFooter";

const Layout = () => {
  return (
    <>
      <div style={{backgroundColor:"black", maring:"0.00025%"}}>
        <div>
          <img src={logo} style={{display:"inline-block",width:"2.5%", heigh:"auto", marginLeft:"20px", marginRight:"20px"}} alt=""></img>
          <h3 style={{ display:"inline-block", color:"white"}}> TODO LIST</h3>
          <Link to="/" style={{marginLeft:"53%",display:"inline-block", backgroundColor:"black", color:"white", textDecoration:"none"}}><ul><Home /></ul></Link>
          <Link to="/getAll" style={{display:"inline-block", backgroundColor:"black", color:"white", textDecoration:"none"}}><ul>All Task</ul></Link>
          <Link to="/addTask" style={{display:"inline-block", backgroundColor:"black", color:"white", textDecoration:"none"}}><ul>Add Task</ul></Link>
        </div>
        <div>
          <img src={pixel} alt="" style={{width: "73.5%"}}></img>
          <ColorInversionFooter style={{margin:"10%"}}></ColorInversionFooter>
        </div>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;