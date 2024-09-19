'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAlbumData } from '@/api/database';
import Loading from './components/Loading';
import List from './components/List';

import '../styles/Home.css';

const Home: React.FC = () => {
  const [albumData, setAlbumData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

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
      <>
        <h1 className='page-title'>Álbuns</h1>
    <List data={albumData} clickFunction={handleClick} />
      </>
  );
};

export default Home;
