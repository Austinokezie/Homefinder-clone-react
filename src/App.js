import { BrowserRouter as Router, Routes,  Route  } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import Signup from "./pages/Signup";
// import PrivateRoute from './components/privateRoute';
// import { Authprovider } from "./components/AuthContext";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
    <Router>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<PrivateRoute/>}>
       <Route path="/Profile" element={<Profile/>} />

      </Route>
      
      <Route path="/Sign" element={<Sign/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/Offers" element={<Offers/>} />
      {/* <Route path="/Header" element={<Header/>} /> */}


      </Routes>
      
    </Router>

    <ToastContainer
     position= "bottom-center"
      autoClose={5000}
      hideProgressBar
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     
    />




    </>
  
   
   
    
      

    
    
    
   
  
    
    
  );
}

export default App;
