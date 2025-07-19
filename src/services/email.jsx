import emailjs from "emailjs-com";
const sendConfirmationEmail = (emailData) => {
    console.log("emialData: ");
    console.log(emailData);
  emailjs.send(
    "service_9js9491",      // Replace with your EmailJS service ID
    "template_srdacyk",     // Replace with your EmailJS template ID
    emailData,
    "1mS0qx6HTRD-1Bdmv"          // Replace with your EmailJS public key (user ID)
  ).then(
    (result) => {
      console.log("Email sent:", result.text);
    },
    (error) => {
      console.error("Email error:", error.text);
    }
  );
};
export default sendConfirmationEmail;