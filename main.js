  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import firebase from 'firebase/app'
  import 'firebase/database'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJs0AOQGlEkBHZK8qlD41UYeAzt0Z3IKs",
    authDomain: "calendario-77272.firebaseapp.com",
    databaseURL: "https://calendario-77272-default-rtdb.firebaseio.com",
    projectId: "calendario-77272",
    storageBucket: "calendario-77272.appspot.com",
    messagingSenderId: "1093703020386",
    appId: "1:1093703020386:web:478943a7d6b73014d3c63b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const database = firebase.database();

  let usuario = document.getElementById('usuarioInp').value;
  let fecha = document.getElementById('fechaInp').value;

function crearUsuario(usuario) {
  const nuevoUsuarioRef = database.ref('usuarios').push();
  nuevoUsuarioRef.set(usuario); 
} 

function leerUsuarios() {
  database.ref('usuarios').on('value', (snapshot) => {
      const usuarios = snapshot.val();
      console.log(usuarios);
  });
}

function actualizarUsuario(id, nuevosDatos) {
  database.ref('usuarios/' + id).update(nuevosDatos);
}

function eliminarUsuario(id) {
  database.ref('usuarios/' + id).remove();
}


crearUsuario(usuario)