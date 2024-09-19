'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllMusics } from '@/api/database';
import Loading from '@/app/components/Loading';
import List from '@/app/components/List';

const Home: React.FC = () => {
  const [albumData, setAlbumData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    // Check if the clicked target is an <li> element
    const target = e.target as HTMLElement;
    const musicItem = target.closest('li'); // Get closest <li> ancestor

    if (musicItem) {
      const albumId = musicItem.id; // Directly access id from the <li>
      console.log('album id =>', albumId);
      router.push(`/album/${albumId}`);
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
    </>
  );
};

export default Home;
