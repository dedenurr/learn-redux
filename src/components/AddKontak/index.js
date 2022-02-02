import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction';

function AddKontak() {
  // 1. buat state untutuk nama dan no hp
  const [nama, setNama] = useState('');
  const [nohp, setNohp] = useState('');
  const [id, setId] = useState('');

  const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer);

  // 5. paggil dispatch
  const dispatch = useDispatch();

  // 4. buat fungsi handlesubmit untuk form
  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      //update kontak
      dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }));
    } else {
      // add kontak
      dispatch(addKontak({ nama: nama, nohp: nohp }));
    }
    // console.log('1. Masuk Handle Submit');
  }

  // reload dom untuk add kontak
  useEffect(() => {
    if (addKontakResult) {
      //console.log('5. Masuk Komponen Did Update');
      dispatch(getListKontak());
      setNama('');
      setNohp('');
    }
  }, [addKontakResult, dispatch]);

  // reload dom untuk detail kontak
  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  // reload dom untuk update kontak
  useEffect(() => {
    if (updateKontakResult) {
      //console.log('5. Masuk Komponen Did Update');
      dispatch(getListKontak());
      setNama('');
      setNohp('');
      setId('');
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? 'EDIT KONTAK' : 'Add Kontak'}</h4>
      {/* 3. buat form menjadi on SUbmit */}
      <form onSubmit={(event) => handleSubmit(event)}>
        {/* 2. gunakan state nama dan no hp pda value dan onchange dalam inputan di form */}
        <input type="text" name="nama" placeholder="Nama . . . " value={nama} id="" onChange={(event) => setNama(event.target.value)} />
        <br />
        <input type="text" name="nohp" placeholder="No Hp . . . " value={nohp} id="" onChange={(event) => setNohp(event.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
