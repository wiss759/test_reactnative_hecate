import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdbGanftq3AGTalKAS1os2Nqa8kgdT28w',
  authDomain: 'test_react_native_hecate.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'hecate-92720',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:173440614550:android:d8152af52c78ac4f1082b7',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };