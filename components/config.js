import { initializeApp } from 'firebase/app';

function Config() {
  // Optionally import the services that you want to use
  // import {...} from "firebase/auth";
  // import {...} from "firebase/database";
  // import {...} from "firebase/firestore";
  // import {...} from "firebase/functions";
  // import {...} from "firebase/storage";

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyAdbGanftq3AGTalKAS1os2Nqa8kgdT28w',
        authDomain: 'hecate-92720.firebaseapp.com',
        databaseURL: 'https://hecate-92720-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'hecate-92720',
        storageBucket: 'hecate-92720.appspot.com',
        messagingSenderId: 'sender-id',
        appId: '1:173440614550:android:d8152af52c78ac4f1082b7',
        measurementId: 'G-measurement-id',
  };

  const firebaseApp = initializeApp(firebaseConfig);

}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default Config;