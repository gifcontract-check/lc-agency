
// IMPORTANT: These variables are public and are used to initialize the Firebase app on the client side.
// They are not secrets and are safe to be exposed in the browser.
// Security is enforced by Firestore Security Rules, not by hiding these keys.

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAfzpvODl0btWDOLc3X6DURzvGPoKcNaO0",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "studio-2850957675-dbc57.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "studio-2850957675-dbc57",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "studio-2850957675-dbc57.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "763977708469",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:763977708469:web:daa4e3bba353ff06275ffc",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ""
};
