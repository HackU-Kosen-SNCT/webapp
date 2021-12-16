// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

/*
 * TODO: Add SDKs for Firebase products that you want to use
 * https://firebase.google.com/docs/web/setup#available-libraries
 */

/*
 * Your web app's Firebase configuration
 * For Firebase JS SDK v7.20.0 and later, measurementId is optional
 */
const firebaseConfig = {
  apiKey: 'AIzaSyCqSuWePne1QNZVo6j8qCNft2qD8sS0Lkc',
  appId: '1:933111564926:web:a3a761a2d3bb2f9aea262f',
  authDomain: 'togather-41040.firebaseapp.com',
  measurementId: 'G-T5CL5BG18P',
  messagingSenderId: '933111564926',
  projectId: 'togather-41040',
  storageBucket: 'togather-41040.appspot.com'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

const storage = getStorage(app)

export { storage, analytics }
