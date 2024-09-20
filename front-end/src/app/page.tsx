'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAlbumData } from '@/api/database';
import Loading from './components/Loading';
import List from './components/List';
import AlbumModal from './components/AlbumModal';

import { DEFAULT_ALBUM_LIST } from '@/utils/strings';
import AlbumI from '../interfaces/AlbumI';

const Home: React.FC = () => {
  const [albumData, setAlbumData] = useState<AlbumI[]>(DEFAULT_ALBUM_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modalType = 'add';

  const emptyData = {
    name: '',
    artist: '',
    launchDate: '',
    launch_date: '',
    active: true,
  };

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    // Check if the clicked target is an <li> element
    const target = e.target as HTMLElement;
    const albumItem = target.closest('li'); // Get closest <li> ancestor

    if (albumItem) {
      const albumId = albumItem.id; // Directly access id from the <li>
      console.log('album id =>', albumId);
      router.push(`/album/${albumId}`);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAlbumData()
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
        onClick={() => setOpenModal(true)}
        className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto edit-album-button add-button'
      >
        Criar
      </button>
      <AlbumModal
        data={emptyData}
        type={modalType}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <h1 className='page-title'>Álbuns</h1>
      <List data={albumData} clickFunction={handleClick} />
    </div>
  );
};

export default Home;
