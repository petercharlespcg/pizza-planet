import Firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAmm03SZzt1dF5nqyvNCf_VlO45787ntWk",
  authDomain: "my-sample-project-cf00d.firebaseapp.com",
  databaseURL: "https://my-sample-project-cf00d.firebaseio.com",
  projectId: "my-sample-project-cf00d",
  storageBucket: "my-sample-project-cf00d.appspot.com",
  messagingSenderId: "558586018838",
  appId: "1:558586018838:web:07e5252ad339f4e86a0937",
  measurementId: "G-CD60KHCZT1"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
// Firebase.analytics();
const db = firebaseApp.database()
// export const dbMenuRef = db.ref('menu')
export const dbMenuRef = db.ref('menu')

