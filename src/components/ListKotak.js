import React from 'react';
import CardKontak from './CardKontak';

function ListKotak({ nama }) {
  return (
    <div>
      <h2>List Kontak</h2>
      <CardKontak nama={nama} />
    </div>
  );
}

export default ListKotak;
