<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDulrFJeOlg41nNYByO-y3zLvgv6fwB1CY",
    authDomain: "qwerty-ef247.firebaseapp.com",
    databaseURL: "https://qwerty-ef247-default-rtdb.firebaseio.com",
    projectId: "qwerty-ef247",
    storageBucket: "qwerty-ef247.appspot.com",
    messagingSenderId: "670930024981",
    appId: "1:670930024981:web:f3528a37ee240b2fcfac1c",
    measurementId: "G-NW71DX9BPS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>