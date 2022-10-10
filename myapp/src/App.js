
import './App.css';
import  Render  from './components/Greet';
import  Input  from './components/Home';
import Hotel from  './components/Hotels';
import Places from  './components/Places';
import { Route , Routes} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Render />
          <Routes>
            <Route path = "Home" element = {<Input title='TOURIST LAND'/>}/>
            <Route path="Hotels" element={<Hotel />}/>
            <Route path = "Places" element = {<Places />}/>
            <Route path='Login' element = {<Login />} />
          </Routes>
      
    </div>
  );
}

export default App;
