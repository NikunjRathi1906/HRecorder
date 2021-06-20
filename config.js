import { firebase } from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtBe4meoyNziSqd7mSuBPlGRX_pDRunus",
  authDomain: "hrecorder-watermeloninc.firebaseapp.com",
  projectId: "hrecorder-watermeloninc",
  storageBucket: "hrecorder-watermeloninc.appspot.com",
  messagingSenderId: "526955330912",
  appId: "1:526955330912:web:4d2fc5eb8582f8dc477205",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
