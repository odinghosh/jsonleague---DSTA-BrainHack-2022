import Register from './pages/Register'
import Homepage from './pages/Homepage';
import Pushup from './pages/pushup-posture';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='home' element={<Homepage/>}/>
      <Route path='pushup' element={<Pushup/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;