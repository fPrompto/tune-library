'use client';

import React, { useEffect, useState } from 'react';
import { getAllMusics, getMusicById } from '@/api/database';
import Loading from '@/app/components/Loading';
import List from '@/app/components/List';
import MusicModal from '@/app/components/MusicModal';

import MusicI from '@/interfaces/MusicI';
import { DEFAULT_MUSIC_DATA } from '@/utils/strings';

const Home: React.FC = () => {
  const [musicData, setMusicData] = useState<MusicI[]>(DEFAULT_MUSIC_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'add' | 'update'>('add');
  const [selectedMusic, setSelectedMusic] = useState<MusicI>(DEFAULT_MUSIC_DATA[0]);

  const handleClick = (e: React.MouseEvent<HTMLUListElement>): void => {
    const target = e.target as HTMLElement;
    const musicItem = target.closest('li');

    if (musicItem) {
      const musicId = musicItem.id;
      console.log('selected music =>', musicId);

      getMusicById(musicId)
        .then((data) => {
          console.log('received music data:', data);
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

  const handleModal = (): void => {
    setModalType('add');
    setOpenModal(true);
  }

  useEffect(() => {
    setIsLoading(true);
    getAllMusics()
      .then((data) => {
        console.log('received music data:', data);
        setMusicData(data);
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

      <List data={musicData} clickFunction={handleClick} />
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
