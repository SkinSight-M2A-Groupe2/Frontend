import './App.css';
import SideBar from 'src/components/common/SideBar/SideBar';
import OptionsBar from './components/common/optionsBar/OptionsBar';
import { Navigate, Outlet } from 'react-router-dom';


function App(props: any) {
  return (
    <div className="App">
      <SideBar />

      {props.children ? <Navigate to={props.children} replace /> : <Outlet />}

      <OptionsBar />
    </div>
  );
}

export default App;
