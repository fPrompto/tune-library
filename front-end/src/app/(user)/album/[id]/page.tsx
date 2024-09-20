'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getAlbumDataById } from '@/api/database';
import Loading from '@/app/components/Loading';
import AlbumModal from '@/app/components/AlbumModal';

import '@/styles/AlbumDetails.css';

const AlbumDetails: React.FC = () => {
  const [albumData, setAlbumData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [openModal, setOpenModal] = useState(true);

  const params = useParams<{ id: string }>();
  const { id } = params;

  useEffect(() => {
    console.log('page id => ', params);
    setIsLoading(true);
    getAlbumDataById(id)
      .then((data) => {
        console.log('Received album data:', data);
        setAlbumData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const formatDate = (date) => {
    const isoDateString = date
    const dateObject = new Date(isoDateString);
    const formattedDate = dateObject.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formattedDate;
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className='album-div'>
        <AlbumModal data={albumData} openModal={openModal} />

      <div className='px-4 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900 text-white'>
          {albumData.name}
        </h3>
        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-white'>
          {`Detalhes do álbum ${albumData.name} da banda ${albumData.artist}`}
        </p>
      </div>
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900 text-white'>
              Nome do Álbum
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-white'>
              {albumData.name}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900 text-white'>
              Artista
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-white'>
              {albumData.artist}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900 text-white'>
              Data de Lançamento
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-white'>
              {formatDate(albumData.launch_date)}
            </dd>
          </div>
          {/* <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900 text-white'>
              Salary expectation
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-white'>
              $120,000
            </dd>
          </div> */}
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900 text-white'>
              Músicas:
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-white'>
              {albumData.musics.map((music) => {
                return <p key={music.name}>{music.name}</p>;
              })}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AlbumDetails;
