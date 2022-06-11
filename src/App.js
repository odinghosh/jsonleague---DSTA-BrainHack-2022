import Register from './pages/Register'
import Homepage from './pages/Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='home' element={<Homepage/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;