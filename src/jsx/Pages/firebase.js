import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDu8ndzgOIfR9K-vDkWpnOdfglVoTA_CM0",
    authDomain: "socialley-51ec2.firebaseapp.com",
    projectId: "socialley-51ec2",
    storageBucket: "socialley-51ec2.appspot.com",
    messagingSenderId: "376511166823",
    appId: "1:376511166823:web:370554ac8e8fac765657c2"
});

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore()
export default db;
export { firebaseConfig };
export { firebase };