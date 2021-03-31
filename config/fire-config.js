import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 'AIzaSyD_9MeUkYwz_9F7d_jfu9YMKNzaKBbZ2Xk',
    authDomain: 'ymir-isle.firebaseapp.com',
    projectId: 'ymir-isle',
    storageBucket: 'ymir-isle.appspot.com',
    messagingSenderId: '434733775602',
    appId: '1:434733775602:web:7288e27b1e3b2ce96bae6b',
    measurementId: 'G-GG1Y821S83',
}
try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
    if (!/already exists/.test(err.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase
export default fire
