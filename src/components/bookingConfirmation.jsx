import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../cssModules/bookingConfirmation.module.css";
import html2pdf from "html2pdf.js";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, bookingDetails } = location.state || {};

  const ticketRef = useRef();

  if (!bookingId || !bookingDetails) {
    return (
      <div className={styles.container}>
        <h2>Booking Confirmation</h2>
        <p>No booking information found. Please try booking again.</p>
        <button
          className={styles.button}
          onClick={() => navigate("/train-search")}
        >
          Return to Search
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDownload = () => {
    const element = ticketRef.current;
    html2pdf().from(element).set({
      margin: 1,
      filename: `Booking_Ticket_${bookingId}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).save();
  };

  return (
    <div className={styles.container}>
      {/* Ticket content to be downloaded */}
      <div ref={ticketRef} className={styles.confirmationCard}>
        <div className={styles.header}>
          <h2>Booking Confirmed!</h2>
          <div className={styles.bookingId}>
            <span>Booking ID:</span>
            <strong>{bookingId}</strong>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Train Details</h3>
          <div className={styles.trainInfo}>
            <div className={styles.trainName}>
              <strong>{bookingDetails.trainDetails.trainName}</strong> (
              {bookingDetails.trainDetails.trainNumber})
            </div>
            <div className={styles.journeyDetails}>
              <div>
                <span className={styles.stationName}>
                  {bookingDetails.trainDetails.from}
                </span>
                <span className={styles.time}>
                  {bookingDetails.trainDetails.departureTime}
                </span>
              </div>
              <div className={styles.arrow}>→</div>
              <div>
                <span className={styles.stationName}>
                  {bookingDetails.trainDetails.to}
                </span>
                <span className={styles.time}>
                  {bookingDetails.trainDetails.arrivalTime}
                </span>
              </div>
            </div>
            <div className={styles.additionalInfo}>
              <div>Date: {bookingDetails.trainDetails.date}</div>
              <div>Class: {bookingDetails.trainDetails.travelClass}</div>
              <div>Duration: {bookingDetails.trainDetails.duration}</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Passenger Details</h3>
          <table className={styles.passengerTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Berth</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.passengers.map((passenger, index) => (
                <tr key={index}>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                  <td>{passenger.gender}</td>
                  <td>{passenger.berth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h3>Contact Information</h3>
          <div className={styles.contactInfo}>
            <div>Email: {bookingDetails.contactInfo.email}</div>
            <div>Phone: {bookingDetails.contactInfo.phone}</div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Payment Details</h3>
          <div className={styles.paymentInfo}>
            <div className={styles.paymentRow}>
              <span>Base Fare:</span>
              <span>₹{bookingDetails.paymentSummary.baseFare}</span>
            </div>
            <div className={styles.paymentRow}>
              <span>Catering Charges:</span>
              <span>₹{bookingDetails.paymentSummary.cateringCharge}</span>
            </div>
            <div className={styles.paymentRow}>
              <span>GST (5%):</span>
              <span>₹{bookingDetails.paymentSummary.gst}</span>
            </div>
            <div className={styles.paymentRow}>
              <span>Convenience Fee:</span>
              <span>₹{bookingDetails.paymentSummary.convenienceFee}</span>
            </div>
            <div className={`${styles.paymentRow} ${styles.totalRow}`}>
              <span>Total Amount:</span>
              <span>₹{bookingDetails.paymentSummary.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.homeButton}`}
          onClick={() => navigate("/")}
        >
          Return to Home
        </button>
        <button
          className={`${styles.button} ${styles.downloadButton}`}
          onClick={handleDownload}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
