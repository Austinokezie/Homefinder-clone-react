import { BrowserRouter as Router, Routes,  Route  } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/profile" element={<Profile />} />
        < Route path="/sign" element={<Sign/>} />
        < Route path="/Signup" element={<Signup />} />
        < Route path="/ForgotPassword" element={<ForgotPassword />} />
        < Route path="/offers" element={<Offers />} />

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
