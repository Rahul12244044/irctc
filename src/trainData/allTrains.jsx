export const allTrains = [
  {
    train_number: "12345",
    train_name: "Rajdhani Express",
    source: "Delhi",
    destination: "Mumbai",
    departure_time: "06:00",
    arrival_time: "14:00",
    duration: "8h",
    price: {
      "AC First Class": 3000,
      "AC 2 Tier": 2000,
      "AC 3 Tier": 1500
    },
    days_of_operation: ["Mon", "Wed", "Fri"],
    route: [
      { station_name: "New Delhi Junction" },
      { station_name: "Kota Junction" },
      { station_name: "Vadodara Junction" },
      { station_name: "Mumbai Central" }
    ]
  },
  {
    train_number: "54321",
    train_name: "Shatabdi Express",
    source: "Delhi",
    destination: "Lucknow",
    departure_time: "09:00",
    arrival_time: "13:00",
    duration: "4h",
    price: {
      "AC Chair Car": 1200,
      "Executive Class": 2000
    },
    days_of_operation: ["Tue", "Thu", "Sat"],
    route: [
      { station_name: "Delhi Junction" },
      { station_name: "Ghaziabad" },
      { station_name: "Bareilly" },
      { station_name: "Lucknow Junction" }
    ]
  },
  {
    train_number: "67890",
    train_name: "Duronto Express",
    source: "Kolkata",
    destination: "Pune",
    departure_time: "16:30",
    arrival_time: "10:45",
    duration: "18h 15m",
    price: {
      "AC First Class": 3500,
      "AC 2 Tier": 2400,
      "Sleeper": 800
    },
    days_of_operation: ["Sun", "Tue"],
    route: [
      { station_name: "Howrah Junction" },
      { station_name: "Nagpur" },
      { station_name: "Manmad" },
      { station_name: "Pune Junction" }
    ]
  },
  {
    train_number: "13579",
    train_name: "Vaishali Express",
    source: "Delhi",
    destination: "Barauni",
    departure_time: "20:00",
    arrival_time: "14:00",
    duration: "18h",
    price: {
      "AC 2 Tier": 1900,
      "AC 3 Tier": 1300,
      "Sleeper": 550
    },
    days_of_operation: ["Daily"],
    route: [
      { station_name: "New Delhi Junction" },
      { station_name: "Gorakhpur" },
      { station_name: "Samastipur" },
      { station_name: "Barauni Junction" }
    ]
  },
  {
    train_number: "24680",
    train_name: "Garib Rath",
    source: "Chennai",
    destination: "Hyderabad",
    departure_time: "22:00",
    arrival_time: "06:00",
    duration: "8h",
    price: {
      "AC 3 Tier": 900
    },
    days_of_operation: ["Mon", "Fri"],
    route: [
      { station_name: "Chennai Central" },
      { station_name: "Nellore" },
      { station_name: "Vijayawada" },
      { station_name: "Hyderabad Deccan" }
    ]
  },
  {
    train_number: "11223",
    train_name: "Intercity Express",
    source: "Bhopal",
    destination: "Indore",
    departure_time: "07:30",
    arrival_time: "10:15",
    duration: "2h 45m",
    price: {
      "Sleeper": 150,
      "AC 2 Tier": 350
    },
    days_of_operation: ["Mon", "Wed", "Fri"],
    route: [
      { station_name: "Bhopal Junction" },
      { station_name: "Sehore" },
      { station_name: "Dewas" },
      { station_name: "Indore Junction" }
    ]
  },
  {
    train_number: "33445",
    train_name: "Kanchanjunga Express",
    source: "Sealdah",
    destination: "Silchar",
    departure_time: "06:35",
    arrival_time: "19:50",
    duration: "13h 15m",
    price: {
      "Sleeper": 600,
      "AC 2 Tier": 1500,
      "AC 3 Tier": 1100
    },
    days_of_operation: ["Tue", "Thu"],
    route: [
      { station_name: "Sealdah" },
      { station_name: "New Jalpaiguri" },
      { station_name: "Guwahati" },
      { station_name: "Silchar" }
    ]
  },
  {
    train_number: "55667",
    train_name: "Goa Express",
    source: "Delhi",
    destination: "Goa",
    departure_time: "15:45",
    arrival_time: "06:00",
    duration: "14h 15m",
    price: {
      "AC First Class": 3200,
      "Sleeper": 850
    },
    days_of_operation: ["Wed", "Sat"],
    route: [
      { station_name: "Hazrat Nizamuddin" },
      { station_name: "Jhansi" },
      { station_name: "Belgaum" },
      { station_name: "Madgaon" }
    ]
  },
  {
    train_number: "77889",
    train_name: "Deccan Queen",
    source: "Mumbai",
    destination: "Pune",
    departure_time: "17:10",
    arrival_time: "20:25",
    duration: "3h 15m",
    price: {
      "AC Chair Car": 600,
      "Sleeper": 250
    },
    days_of_operation: ["Daily"],
    route: [
      { station_name: "Mumbai CST" },
      { station_name: "Karjat" },
      { station_name: "Lonavala" },
      { station_name: "Pune Junction" }
    ]
  },
  {
    train_number: "99887",
    train_name: "Howrah Express",
    source: "Ahmedabad",
    destination: "Howrah",
    departure_time: "11:00",
    arrival_time: "13:00",
    duration: "26h",
    price: {
      "AC First Class": 4000,
      "AC 3 Tier": 1800
    },
    days_of_operation: ["Mon", "Thu", "Sat"],
    route: [
      { station_name: "Ahmedabad Junction" },
      { station_name: "Raipur" },
      { station_name: "Tatanagar" },
      { station_name: "Howrah Junction" }
    ]
  },
  {
    train_number: "88990",
    train_name: "Chennai Express",
    source: "Mumbai",
    destination: "Chennai",
    departure_time: "20:30",
    arrival_time: "16:30",
    duration: "20h",
    price: {
      "AC 2 Tier": 2200,
      "AC 3 Tier": 1600,
      "Sleeper": 700
    },
    days_of_operation: ["Tue", "Sun"],
    route: [
      { station_name: "Dadar" },
      { station_name: "Solapur" },
      { station_name: "Renigunta" },
      { station_name: "Chennai Central" }
    ]
  }
];
