import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteKontak, detailKontak, getListKontak } from '../../actions/kontakAction';

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Panggil Action Get ListKontak
    // console.log('1. use Effect component did Mount ');
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      console.log('5. Masuk Komponen Did Update');
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} - <button onClick={() => dispatch(deleteKontak(kontak.id))}>HAPUS</button>
              <button style={{ marginLeft: '10px' }} onClick={() => dispatch(detailKontak(kontak))}>
                EDIT
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading ...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : 'data Kosong'}</p>
      )}
    </div>
  );
}

export default ListKontak;
