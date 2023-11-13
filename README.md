Descripcion breve del proyecto

Probando algo de código viejo, esto encontré como base para un proyecto anterior. Es similar a lo que vimos en clase hay que adaptarlo a nuestro caso

//Importar
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

// Inicializar Firebase
const firebaseConfig = {
 apiKey: 'API_KEY',
 authDomain: 'AUTH_DOMAIN',
 databaseURL: 'DATABASE_URL',
 projectId: 'PROJECT_ID',
 storageBucket: 'STORAGE_BUCKET',
 messagingSenderId: 'MESSAGING_SENDER_ID',
 appId: 'APP_ID',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function App() {
 const [data, setData] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref('/').once('value');
      const data = snapshot.val();
      setData(data);
    };

    fetchData();
 }, []);

 return (
    <div className="App">
      <h1>Captured Data from Firebase Database</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([id, details]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{details.name}</td>
              <td>{details.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default App;
