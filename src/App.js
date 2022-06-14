import Register from './pages/Register'
import Homepage from './pages/Homepage';
import PushupPosture from './pages/pushup-posture';
import Circuit from './pages/Circuit'
import Running from './pages/Running'
import Situp from './pages/Situp'
import Pushup from './pages/Pushup'
import SitupPosture from './pages/situp-posture'
import Initialise from "./pages/Initialise";
import Settings from "./pages/Settings";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='home' element={<Homepage/>}/>
      <Route path='pushupPosture' element={<PushupPosture/>}/>
      <Route path='ippt' element={<Circuit/>}/>
      <Route path='running' element={<Running/>}/> 
      <Route path='situp' element={<Situp/>}/>
      <Route path='pushup' element={<Pushup/>}/>
      <Route path='situpPosture' element={<SitupPosture/>}/>
      <Route path='initialise' element={<Initialise/>}/>
      <Route path='settings' element={<Settings/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;