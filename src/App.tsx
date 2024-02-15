import './App.css';
import SideBar from 'src/components/common/SideBar/SideBar';
import OptionsBar from './components/common/optionsBar/OptionsBar';
import { Navigate, Outlet } from 'react-router-dom';
import AuthProvider  from './hooks/Auth';


function App(props: any) {
  return (
  <AuthProvider >
    <div className="App">
      
      <SideBar />

      {props.children ? <Navigate to={props.children} replace /> : <Outlet />}

      <OptionsBar />
     
    </div> 
  </AuthProvider>
  );
}

export default App;
