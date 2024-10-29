import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
    apiKey: "AIzaSyCd28xXDIVmjVEY5PSBOz9IVhtGp89syh8",
    authDomain: "apirefeicoesjoao.firebaseapp.com",
    projectId: "apirefeicoesjoao",
    storageBucket: "apirefeicoesjoao.appspot.com",
    messagingSenderId: "24742199943",
    appId: "1:24742199943:web:4e22cf7f3dffd5788dae22"
  }
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Inicializando e exportando a autenticação

