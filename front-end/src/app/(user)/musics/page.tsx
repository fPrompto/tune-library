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
          console.log('selected music data =>', selectedMusic);
          setOpenModal(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

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
    <>
      <h1 className='page-title'>Músicas</h1>
      <List data={albumData} clickFunction={handleClick} />
      <MusicModal
        data={selectedMusic}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Home;
