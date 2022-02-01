import { useState } from 'react';
import './App.css';
import ListKotak from './components/ListKotak';

function App() {
  const [nama, setName] = useState('dede');
  return (
    <div className="App">
      <h2>Aplikasi Kontak App</h2>
      <ListKotak nama={nama} />
    </div>
  );
}

export default App;
