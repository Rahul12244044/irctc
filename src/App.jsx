import { useState } from 'react'
import react from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/components/navbar.jsx";
import ContactPage from "./components/contactPage.jsx"
import {Footer} from "../src/components/footer.jsx";
import TrainDetails from "../src/components/trainDetails.jsx";
import TrainCarousel from "../src/components/crausoel.jsx";
import {Login} from "../src/components/login.jsx";
// import {Form} from "../src/components/form.jsx";
import {app} from "./config/firebase.config.jsx";
import {Home} from "./components/home.jsx";
import {Register} from "../src/components/register.jsx";
import BookingHistoryPage from "../src/components/bookingHistory.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContextProvider} from "./context/auth.context.jsx";
import {ProtectedRoute} from "./components/protectedRoute.jsx";
import BookingPage from "./components/booking.jsx";  
// import {useNavigate} from "react-router-dom";
import styles from "./cssModules/app.module.css";
import {Routes,Route,BrowserRouter as Router,useNavigate,useLocation} from "react-router-dom";
import {Contact} from "./components/contact.jsx";
import {TrainSearchResults} from "./components/trainSearch.jsx";
// import {registerWithEmail} from "./services/auth.service.jsx";
import BookingConfirmation from "./components/bookingConfirmation.jsx";
const RouteManager=()=>{
  const location=useLocation();
  const navigate = useNavigate();
  
  return (
    <>
    <div className={styles.mainContent}>
      {(location.pathname === "/" || location.pathname==="/login") && (
        <>
          <Home />
          <TrainCarousel/>
        </>
      )}
    <Routes>
      <Route path="/" element={null}/>
      <Route path="/booking" element={
        <ProtectedRoute>
          <BookingPage/>
        </ProtectedRoute>
        }/>
      <Route
          path="/booking-history"
          element={
            <ProtectedRoute>
              <BookingHistoryPage />
            </ProtectedRoute>
          }
        />
      <Route path="/train-details/:train_number" element={<TrainDetails />} />
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/train-search" element={<TrainSearchResults/>}></Route>
      <Route path="/login" element={<Login
       isOpen={true}
              onClose={() => navigate(-1)}
              onLogin={() => {}}
              switchToRegister={() => {}}/>}/>
      <Route path="/booking-confirmation" element={<BookingConfirmation/>}></Route>
    </Routes>
    </div>
    </>
  )
}
function App() {
  return (
   
    <AuthContextProvider>
      <ToastContainer/>
      <Router>
      <div className={styles.app}>
      <Navbar/>
      <RouteManager/>
      <Footer/>
      </div>
      </Router>
      
      </AuthContextProvider>
   
  )
}

export default App
