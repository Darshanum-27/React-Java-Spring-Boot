import { Outlet, Link } from "react-router-dom";
import Home from './Home'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button><Link to="/"><Home /></Link></Button>
        <Button><Link to="/getAll">Get ALL1</Link></Button>
        </ButtonGroup>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;