import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../cssModules/navbar.module.css";
import { FaBell, FaQuestionCircle, FaHome } from "react-icons/fa";
import {Login} from "../components/login.jsx";
import {Register} from "../components/register.jsx";
import { useAuth } from "../context/auth.context.jsx";
import { logOut } from "../services/auth.service.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useAuth(); // Fixed: Proper extraction from useAuth hook
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleBookingClick = () => {
    if (currentUser) {
      navigate("/booking-history"); // Changed: Navigate to booking instead of train-search
    } else {
      setIsLoginOpen(true);
    }
  };

  // const handleTrainSearchClick = () => {
  //   navigate("/train-search"); // Added: Separate handler for train search
  // };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleLogout = async () => {
    try {
      await logOut();
       console.log("curretnUserAfter Logout: ");
      console.log(currentUser);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  console.log("currentUser: ");
  console.log(currentUser);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <FaHome
            className={styles.homeIcon}
            onClick={handleHomeClick}
            title="Home"
          />
          <div className={styles.logo}>IRCTC</div>
        </div>
        <div className={styles.navLinks}>
          <span className={styles.navLink} onClick={handleBookingClick}>
            BOOKINGS
          </span>
          {/* <span 
            className={styles.navLink} 
            onClick={handleTrainSearchClick}
          >
            TRAIN SEARCH
          </span> */}
          <span className={styles.navLink} onClick={handleContactClick}>
            CONTACT US
          </span>
          <span>
            {currentTime.toLocaleDateString()} [
            {currentTime.toLocaleTimeString()}]
          </span>
          <FaBell className={styles.icon} title="Notifications" />
          <FaQuestionCircle className={styles.icon} title="Help & Support" />
          {currentUser ? (
            <>
              <span>Welcome, {currentUser.displayName || "User"}</span>
              {/* <button className={styles.authButton} onClick={handleLogout}>
                LOGOUT
              </button> */}
            </>
          ) : (
            <>
              <button
                className={styles.authButton}
                onClick={() => setIsLoginOpen(true)}
              >
                LOGIN
              </button>
              <button
                className={styles.registerButton}
                onClick={() => setIsRegisterOpen(true)}
              >
                REGISTER
              </button>
            </>
          )}
        </div>
      </nav>

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        switchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onLogin={() => {}} // Will be updated in LoginModal.jsx
      />

      <Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        switchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
};

export default Navbar;
