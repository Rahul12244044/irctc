import {
  FaExchangeAlt,
  FaCalendarAlt,
  FaSuitcase,
  FaTrain,
} from "react-icons/fa";
import styles from "../cssModules/home.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Home=()=>{
  const [stationFrom,setStationFrom]=useState("");
  const [stationTo,setStationTo]=useState("");
  const [date,setDate]=useState("");
  const [selectedClass,setSelectedClass]=useState("");
  const [quota,setQuota]=useState("General");
  const navigate=useNavigate();
  const handleSwap=()=>{
    console.log("handleSwap");
    const r=stationFrom;
    console.log("stationFrom: "+r);
    setStationFrom(stationTo);
    setStationTo(r);
  }
  const handleSearchTrains=(event)=>{
    event.preventDefault();
    if(!stationFrom || !stationTo){
      alert("Please enter both From and To stations");
      return;
    }
    //navigate to train-search url
    navigate(`/train-search?from=${encodeURIComponent(stationFrom)}&to=${encodeURIComponent(stationTo)}
    &date=${encodeURIComponent(date)}&class=${encodeURIComponent(selectedClass)}&quota=${encodeURIComponent(quota)}`);
  }
  const handleAllTrains=()=>{
    console.log("handleAllTrains");
    navigate("/train-search")
  }
    return (
    <>
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          src="https://images6.alphacoders.com/702/thumb-1920-702963.jpg"
          alt="Train Background"
          className={styles.trainImage}
        />
      </div>

      <div className={styles.bookingForm}>
        <h2>BOOK TICKET</h2>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <input onChange={(event)=>setStationFrom(event.target.value)}
              type="text"
              value={stationFrom}
              placeholder="From Station"
              
              className={styles.input}
            />
          </div>
          <button
          onClick={handleSwap}
            className={styles.swapButton}
            
            type="button"
          >
            <FaExchangeAlt />
          </button>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <input onChange={(event)=>setStationTo(event.target.value)}
              type="text"
              value={stationTo}
              placeholder="To Station"
              
              
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaCalendarAlt className={styles.icon} />
            <input onChange={(event)=>setDate(event.target.value)}
              type="date"
              className={styles.input}
              
              
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaSuitcase className={styles.icon} />
            <select onChange={(event)=>setSelectedClass(event.target.value)}
              className={styles.select}
              
             
            >
              <option value="">All Classes</option>
              <option value="SL">Sleeper</option>
              <option value="3A">AC 3 Tier</option>
              <option value="2A">AC 2 Tier</option>
              <option value="1A">AC First Class</option>
              <option value="CC">AC Chair Car</option>
              <option value="EC">Executive Class</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <select onChange={(event)=>setQuota(event.target.value)}
              className={styles.select}
              
              
            >
              <option>General</option>
              <option>Ladies</option>
              <option>Tatkal</option>
              <option>Premium Tatkal</option>
              <option>Railway Pass</option>
            </select>
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" /> Person With Disability Concession
          </label>
          <label>
            <input type="checkbox" /> Flexible With Date
          </label>
          <label>
            <input type="checkbox" /> Train with Available Berth
          </label>
          <label>
            <input type="checkbox" /> Railway Pass Concession
          </label>
        </div>

        <div className={styles.buttonGroup}>
          <button onClick={handleSearchTrains} className={styles.searchButton} >
            Search Trains
          </button>
          <button
            onClick={handleAllTrains}
            className={styles.ShowTrain}
           
          >
            Show All Trains
          </button>
        </div>
      </div>
    </div>

    </>)
}