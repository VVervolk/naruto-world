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
  emailForm: document.querySelector('.js-email'),
  passwordForm: document.querySelector('.js-password'),
  formTest: document.querySelector('.js-test'),
};

const logIn = {
  emailLogIn: document.querySelector('.js-email__log'),
  passwordLogIn: document.querySelector('.js-password__log'),
  FormLogIn: document.querySelector('.js-log-in'),
};

const accountBox = document.querySelector('.header__account-box');
const signOutButton = document.querySelector('.js-sign_out');

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

registration.formTest.addEventListener('submit', registerNewUser);
logIn.FormLogIn.addEventListener('submit', signIn);
signOutButton.addEventListener('click', logOut);

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    const email = user.email;
    console.log(uid);
  } else {
    console.log('Anyone log in');
  }
});

function registerNewUser(evt) {
  evt.preventDefault();
  registration.formTest.reset();
  createUserWithEmailAndPassword(
    auth,
    registration.emailForm.value,
    registration.passwordForm.value
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
}

function logOut(evt) {
  console.log(evt);
  signOut(auth)
    .then(() => {
      console.log('Log out');
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}

function signIn(evt) {
  evt.preventDefault();
  logIn.FormLogIn.reset();
  signInWithEmailAndPassword(
    auth,
    logIn.emailLogIn.value,
    logIn.passwordLogIn.value
  )
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      console.log(user);
      console.log('Signed in');
      changeAccountBox(user);
      // ...
    })
    .catch(error => {
      console.log(error, 'Signed in');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// function changeAccountBox() {
//   //   accountBox.innerHTML = `<p class="account__name">Hi, ${user.email}</p>
//   // <button class="account__button js-sign_out">Sign out</button>`;

//   const array = [...accountBox.children];
//   console.log(array);
//   array.map(child => {
//     if (child.classList.contains('.hidden')) {
//       child.classList.remove('.hidden');
//     } else {
//       child.classList.add('.hidden');
//     }
//     array.push(child);
//     console.log(array);
//   });
// }
// changeAccountBox();
