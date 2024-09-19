'use client';

import React, { useEffect, useState } from 'react';
import { getAlbumData } from '@/api/database';

import '../styles/Home.css';

const Home: React.FC = () => {
  const [albumData, setAlbumData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div>Loading... me deleta depois</div>
  ) : (
    <div className='main-div'>
      <ul role='list' className='divide-y divide-gray-100'>
          {albumData.map((a) => {
            const isoDateString = a.launch_date;
            const dateObject = new Date(isoDateString);
            const formattedDate = dateObject.toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <li key={a.name} className='flex justify-between gap-x-6 py-5'>
                <div className='flex min-w-0 gap-x-4'>
                  {/* <img
                alt=''
                src={person.imageUrl}
                className='h-12 w-12 flex-none rounded-full bg-gray-50'
              /> */}
                  <div className='min-w-0 flex-auto'>
                    <p className='text-sm font-semibold leading-6 text-gray-900 text-white'>
                      {a.name}
                    </p>
                    <p className='mt-1 truncate text-xs leading-5 text-gray-500 text-white'>
                      {a.artist}
                    </p>
                  </div>
                </div>
                <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
                  <p className='text-sm leading-6 text-gray-900 text-white'>
                    {formattedDate}
                  </p>
                  {/* {person.lastSeen ? (
                <p className='mt-1 text-xs leading-5 text-gray-500 text-white'>
                  Last seen{' '}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className='mt-1 flex items-center gap-x-1.5'>
                  <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
                    <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                  </div>
                  <p className='text-xs leading-5 text-gray-500 text-white'>
                    Online
                  </p>
                </div>
              )} */}
                </div>
              </li>
            );})}
      </ul>
    </div>
  );
};

export default Home;
