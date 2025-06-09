// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZ_VK4QnvN6j1rTDF089Rm6DtqHhfbFpQ",
  authDomain: "projetoprovarafael.firebaseapp.com",
  projectId: "projetoprovarafael",
  storageBucket: "projetoprovarafael.firebasestorage.app",
  messagingSenderId: "501892022902",
  appId: "1:501892022902:web:4014beb25dfb9b27bc1557"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
