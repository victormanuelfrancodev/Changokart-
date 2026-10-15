// Configuración de Firebase para Changuito Kart.
// Pega aquí la configuración de tu app web de Firebase:
//   Consola de Firebase → ⚙️ Configuración del proyecto → General → Tus apps → (app web) → Configuración del SDK → "Config".
// Mientras se quede en null, el juego funciona normal pero sin estadísticas ni tabla mundial.
// Estos datos no son secretos: Firebase los diseña para ir en el navegador. La seguridad la dan las reglas de firestore.rules.
window.CK_FIREBASE = {
  apiKey: "AIzaSyChnntoqIAkHYMQDJ_mamMuS3HqDir8B2w",
  authDomain: "changuitokart.firebaseapp.com",
  projectId: "changuitokart",
  storageBucket: "changuitokart.firebasestorage.app",
  messagingSenderId: "327924533029",
  appId: "1:327924533029:web:8127dad23db6794a20fccc",
  measurementId: "G-4MG3Y5GXKP"
};

/* Ejemplo de cómo debe quedar:
window.CK_FIREBASE = {
  apiKey: "AIza...",
  authDomain: "changokart.firebaseapp.com",
  projectId: "changokart",
  storageBucket: "changokart.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
  measurementId: "G-XXXXXXX"
};
*/
