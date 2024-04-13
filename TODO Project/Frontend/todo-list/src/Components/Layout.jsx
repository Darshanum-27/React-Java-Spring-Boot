import { Outlet, Link} from "react-router-dom";
import backgroundVideo from './backgroundVideo.mp4'

const Layout = () => {
  return (
    <>
        <div>
            <video src={backgroundVideo} autoPlay loop muted style={{maxWidth:"99.9%", maxHeight:"90%"}}></video>
            <h3 style={{ color:"white",position:"absolute", top:"3px",left:"40px"}}> TODO LIST</h3>
            <Link to="/" style={{position:"absolute", top:"3px",left:"70%",color:"White", textDecoration:"none"}}><ul>Home</ul></Link>
            <Link to="/getAll" style={{position:"absolute", top:"3px",left:"77%",color:"White", textDecoration:"none"}}><ul>All Task</ul></Link>
            <Link to="/addTask" style={{position:"absolute", top:"3px",left:"85%",color:"White", textDecoration:"none"}}><ul>Add Task</ul></Link> 
        </div>
      <Outlet />
    </>
  )
};

export default Layout;