import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../cssModules/modifySearch.module.css";
import { FaExchangeAlt } from "react-icons/fa";

const ModifySearch = () => {
  
  const [searchParams,setSearchParams]=useState({});
  console.log("modify all Search params using props: ");
  console.log(searchParams);
  const location=useLocation();
  const navigate=useNavigate();
  // Extract search parameters from URL when component mounts
  useEffect(()=>{
    const query=new URLSearchParams(location.search);
    const params={
      from:query.get("from") || "",
      to:query.get("to") || "",
      date:query.get("date") || "",
      travelClass:query.get("class") || "",
      quota:query.get("quota") || ""
    }
    setSearchParams(params);
  },[location.search])
  // const handleSubmitForm=(event)=>{
  //   event.preventDefault();
  // }
  // Function to handle search form submission
  const handleModify=(event)=>{
    event.preventDefault();
    if(!searchParams.to || !searchParams.from){
      alert("Please enter both From and To stations");
      return;
    }
    const {from,to,date,travelClass,quota}=searchParams;
    navigate(`/train-search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}
    &date=${encodeURIComponent(date)}&class=${encodeURIComponent(travelClass)}&quota=${encodeURIComponent(quota)}`);
  }
  // Function to swap From and To stations
  const handleSwap=()=>{
    setSearchParams((prev)=>{
      const to=prev.to
      return {
        ...prev,
        to:prev.from,
        from:to
      }
    });
  }
  

  return (
    <div className={styles.searchForm}>
      <h3>Modify Search</h3>
      <form >
        <div className={styles.stationInputs}>
          <input
            value={searchParams.from}
            type="text"
            placeholder="From"
            onChange={(event)=>setSearchParams({...searchParams,from:event.target.value})}
           
          />
          <button
          onClick={handleSwap}
            type="button"
            className={styles.swapButton} 
          >
            <FaExchangeAlt />
          </button>
          <input 
            value={searchParams.to}
            type="text"
            placeholder="To"
           onChange={(event)=>setSearchParams({...searchParams,to:event.target.value})}
          />
        </div>

        <input
          value={searchParams.date}
          type="date"
          onChange={(event)=>setSearchParams({...searchParams,date:event.target.value})}
        />

        <select
          value={searchParams.travelClass}
          onChange={(event)=>setSearchParams({...searchParams,travelClass:event.target.value})}
        >
          <option value="">Select Class</option>
          <option value="1A">AC First Class (1A)</option>
          <option value="2A">AC 2 Tier (2A)</option>
          <option value="3A">AC 3 Tier (3A)</option>
          <option value="SL">Sleeper (SL)</option>
        </select>

        <select
          value={searchParams.quota}
          onChange={(event)=>setSearchParams({...searchParams,quota:event.target.value})}
        >
          <option value="General">General</option>
          <option value="Ladies">Ladies</option>
          <option value="Tatkal">Tatkal</option>
          <option value="Premium Tatkal">Premium Tatkal</option>
        </select>

        <button onClick={handleModify}  type="submit">Modify Search</button>
      </form>
    </div>
  );

}
export default ModifySearch;
