// import logo from './logo.svg';
import './App.css';
import {Nav} from "./Components/Nav"
import {BrowserRouter,Routes,Route} from"react-router-dom";
import {Home} from "./Components/Home"
import {Services} from "./Components/Services"
import {Contact} from "./Components/Contact"
import {AboutUs} from "./Components/AboutUs"
import {Help} from "./Components/Help"
import {Card,CardContent} from "@mui/material"
import { Shopping } from './Components/Shopping';
 


function App() {
  return (
    <div className="App">


      <BrowserRouter>  
      
      <Card>
        <CardContent>
        <Nav/>

        </CardContent>
        </Card>
      
      
          <Routes>
            <Route path="/home" element={ <Home/>} />
            <Route path="/services" element={ <Services/>} />
            <Route path="/shopping" element={<Shopping/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/aboutus" element={ <AboutUs/>} />
            <Route path="help" element={ <Help/> } />



            <Route path="/" elemet={<Home/>} />








          </Routes>
      
      
      </BrowserRouter>




    </div>
  );
}

export default App;
