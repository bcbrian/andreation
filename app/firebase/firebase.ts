import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

let app, auth, db, analytics;

if (!getApps().length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDQFSyWieK9-E6Lz8aSSzsXkheMTJzdTv8",
    authDomain: "andreations-1.firebaseapp.com",
    projectId: "andreations-1",
    storageBucket: "andreations-1.appspot.com",
    messagingSenderId: "401267718733",
    appId: "1:401267718733:web:329cae131bcf327a6d7a04",
    measurementId: "G-WZN6XWJQ6D",
  };
  app = initializeApp(firebaseConfig);
  auth = getAuth();
  db = getFirestore();
  if (typeof document !== "undefined") {
    analytics = getAnalytics();
  }
  if (process.env.NODE_ENV === "development") {
    connectFirestoreEmulator(db, "localhost", 8080);
    connectAuthEmulator(auth, "http://localhost:9099");
  }
}

export {
  app,
  auth,
  db,
  analytics,
  getAuth,
  getFirestore,
  getAnalytics,
  logEvent,
};
