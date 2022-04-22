// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDF3opHY5y5fklUm8ln1rSf-4VSHW6ryCU",
//   authDomain: "myapp-b8494.firebaseapp.com",
//   projectId: "myapp-b8494",
//   storageBucket: "myapp-b8494.appspot.com",
//   messagingSenderId: "625401730901",
//   appId: "1:625401730901:web:751c03a28d632e99cd41dc",
//   measurementId: "G-BNCPRW5FN1",
// };

// const app = initializeApp(firebaseConfig);
// const Firebase = getAnalytics(app);

// export default Firebase;

import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDF3opHY5y5fklUm8ln1rSf-4VSHW6ryCU",
  authDomain: "myapp-b8494.firebaseapp.com",
  projectId: "myapp-b8494",
  storageBucket: "myapp-b8494.appspot.com",
  messagingSenderId: "625401730901",
  appId: "1:625401730901:web:751c03a28d632e99cd41dc",
  measurementId: "G-BNCPRW5FN1",
});

const FIREBASE = firebase;

export default FIREBASE;
