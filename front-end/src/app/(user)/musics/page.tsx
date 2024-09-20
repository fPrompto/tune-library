'use client';

import React, { useEffect, useState } from 'react';
import { getAllMusics, getMusicById } from '@/api/database';
import Loading from '@/app/components/Loading';
import List from '@/app/components/List';
import MusicModal from '@/app/components/MusicModal';

const Home: React.FC = () => {
  const [albumData, setAlbumData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [selectedMusic, setSelectedMusic] = useState({});

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const musicItem = target.closest('li');

    if (musicItem) {
      const musicId = musicItem.id;
      console.log('selected music =>', musicId);

      getMusicById(musicId)
        .then((data) => {
          console.log('Received album data:', data);
          setSelectedMusic(data);
          setModalType('update');
          console.log('selected music data =>', selectedMusic);
          setOpenModal(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleModal = () => {
    setModalType('add');
    setOpenModal(true);
  }

  useEffect(() => {
    setIsLoading(true);
    getAllMusics()
      .then((data) => {
        console.log('Received album data:', data);
        setAlbumData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className='content-div'>
      <button
        type='button'
        onClick={() => handleModal()}
        className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto edit-album-button add-button'
      >
        Criar
      </button>
      <h1 className='page-title'>Músicas</h1>

      <List data={albumData} clickFunction={handleClick} />
      <MusicModal
        data={selectedMusic}
        openModal={openModal}
        setOpenModal={setOpenModal}
        type={modalType}
      />
    </div>
  );
};

export default Home;
