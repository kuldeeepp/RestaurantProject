import "./App.css";
import {  BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Sucess from "./Pages/Sucess";
import NotFound from "./Pages/NotFound";
import Reservation from "./Pages/Reservation";
import LoginForm from "./Pages/loginForm";
import SignupForm from "./Pages/SignupForm";
import CuisineMenu from "./Components/CuisineMenu";


const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Sucess/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/reservation" element={<Reservation/>}/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/success" element={<Sucess/>}/>
      <Route path="/menu/:cuisine" element={<CuisineMenu/>} />
    </Routes>
    <Toaster/>
  </Router>
  
};
export default App;
