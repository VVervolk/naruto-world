import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const registration = {
  emailReg: document.querySelector('.js-email'),
  passwordReg: document.querySelector('.js-password'),
  formReg: document.querySelector('.js-test'),
};

const logIn = {
  emailLogIn: document.querySelector('.js-email__log'),
  passwordLogIn: document.querySelector('.js-password__log'),
  formLogIn: document.querySelector('.js-log-in'),
};

const account = {
  signOutButton: document.querySelector('.js-sign_out'),
  signUpButton: document.querySelector('.js-sign_up'),
  signInButton: document.querySelector('.js-sign_in'),
  welcome: document.querySelector('.js-welcome'),
};

const firebaseConfig = {
  apiKey: 'AIzaSyCJMItHBqFDoLJDsSUvyhMYr2rtrI8eHJA',
  authDomain: 'naruto-a4b10.firebaseapp.com',
  projectId: 'naruto-a4b10',
  storageBucket: 'naruto-a4b10.appspot.com',
  messagingSenderId: '201982864594',
  appId: '1:201982864594:web:dd8cc327b440809fc0510b',
  measurementId: 'G-5S182CBZBL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export let userCurrent = null;

registration.formReg.addEventListener('submit', registerNewUser);
logIn.formLogIn.addEventListener('submit', signIn);
account.signOutButton.addEventListener('click', logOut);

onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user.uid);
    account.signUpButton.classList.add('hidden');
    account.signInButton.classList.add('hidden');
    account.signOutButton.classList.remove('hidden');
    account.welcome.classList.remove('hidden');
    account.welcome.textContent = `Hi, ${user.email}`;
    return (userCurrent = user.email);
  } else {
    console.log('Anyone log in');
    account.signUpButton.classList.remove('hidden');
    account.signInButton.classList.remove('hidden');
    account.signOutButton.classList.add('hidden');
    account.welcome.classList.add('hidden');
  }
});

async function registerNewUser(evt) {
  evt.preventDefault();
  await createUserWithEmailAndPassword(
    auth,
    registration.emailReg.value,
    registration.passwordReg.value
  )
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  location.reload();
}

function logOut(evt) {
  signOut(auth)
    .then(() => {
      console.log('Log out');
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}

async function signIn(evt) {
  evt.preventDefault();

  await signInWithEmailAndPassword(
    auth,
    logIn.emailLogIn.value,
    logIn.passwordLogIn.value
  )
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      console.log(user);
      console.log('Signed in');

      // ...
    })
    .catch(error => {
      console.log(error, 'Signed in');
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  location.reload();
}

//////////////////////////////////////////////
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
const get = document.querySelector('.js-get-test');
get.addEventListener('click', getData);

export async function firestoreTest(user, userRequest) {
  try {
    const dateRequest = new Date().toUTCString();
    const docRef = await updateDoc(
      doc(db, `requests/${user}`),
      {
        [dateRequest]: `${userRequest}`,
      },
      { merge: true }
    );
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function getData() {
  try {
    console.log(userCurrent);
    const docRef = await getDoc(doc(db, `requests/${userCurrent}`));
    // docRef.forEach(doc => console.log(doc.id, ' => ', doc.data()));
    console.log(docRef.data());
    // console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
