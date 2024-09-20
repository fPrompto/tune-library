'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import AlbumList from './AlbumList';

import { updateMusic, getAlbumData, createMusic } from '@/api/database';
import {
  normalDateToIso,
  isoToNormalDate,
  getCurrentDate,
} from '@/utils/convertDate';
import { DEFAULT_ALBUM_LIST } from '@/utils/strings';
import MusicModalProps from '@/interfaces/MusicModalProps';
import AlbumI from '@/interfaces/AlbumI'

const MusicModal: React.FC<MusicModalProps> = ({ openModal, setOpenModal, data, type }) => {
  console.log('modal data =>', data);

  const normalDate = isoToNormalDate(data.launch_date);

  const [name, setName] = useState<string>(data.name);
  const [artist, setArtist] = useState<string>(data.artist);
  const [launchDate, setLaunchDate] = useState<string>(normalDate);
  const [albumId, setAlbumId] = useState<number>(Number(data.album_id));
  const [albumList, setAlbumList] = useState<AlbumI[]>(DEFAULT_ALBUM_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [modalTitle, setModalTitle] = useState('');

  const UPDATE = 'update';
  const ADD = 'add';

  const setTitle = (): void => {
    if (type === UPDATE) {
      setModalTitle('Editar Música');
    }

    if (type === ADD) {
      setModalTitle('Adicionar Música');
    }
  };

  const handleUpdate = (): void => {
    updateMusic({
      id: data.id,
      name,
      artist,
      launch_date: normalDateToIso(launchDate),
      album_id: Number(albumId),
      active: true,
    })
      .then((data) => {
        console.log('new data:', data);
      })
      .catch((error) => {
        alert(error.message);
      });
    setOpenModal(false);
  };

  const handleCreate = (): void => {
    createMusic({
      id: data.id,
      name,
      artist,
      launch_date: normalDateToIso(launchDate),
      album_id: Number(albumId),
      active: true,
    })
      .then((data) => {
        console.log('new data:', data);
      })
      .catch((error) => {
        alert(error.message);
      });
    setOpenModal(false);
  };

  const handleSave = (): void => {
    if (type === UPDATE) {
      handleUpdate();
    }

    if (type === ADD) {
      handleCreate();
    }
  };

  const handleDel = (): void => {
    updateMusic({
      id: data.id,
      name: data.name,
      artist: data.artist,
      launch_date: data.launch_date,
      album_id: data.album_id,
      active: false,
    })
      .then((data) => {
        console.log('new data:', data);
      })
      .catch((error) => {
        alert(error.message);
      });
    setOpenModal(false);
  };

  const getAlbums = (): void => {
    getAlbumData()
      .then((data) => {
        console.log('Received album data:', data);
        setAlbumList(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const disableButton = (): JSX.Element => {
    if (type === UPDATE) {
      return (
        <button
          type='button'
          data-autofocus
          onClick={() => handleDel()}
          className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto save-button'
        >
          Desativar
        </button>
      );
    }
    return <div></div>;
  };

  useEffect(() => {
    if (type === UPDATE) {
      setIsLoading(true);
      setName(data.name);
      setArtist(data.artist);
      setLaunchDate(normalDate);
      setAlbumId(data.album_id);
      getAlbums();
      setTitle();
      setIsLoading(false);
    }

    if (type === ADD) {
      setIsLoading(true);
      setName('');
      setArtist('');
      setLaunchDate(getCurrentDate());
      setAlbumId(1);
      getAlbums();
      setTitle();
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Dialog open={openModal} onClose={setOpenModal} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                  <ExclamationTriangleIcon
                    aria-hidden='true'
                    className='h-6 w-6 text-red-600'
                  />
                </div>
                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                  <DialogTitle
                    as='h3'
                    className='text-base font-semibold leading-6 text-gray-900 album-modal-title'
                  >
                    {modalTitle}
                  </DialogTitle>
                  <div className='mt-2 modal-div'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Nome:
                      </label>
                      <div className='mt-2'>
                        <input
                          id='name'
                          name='name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 album-modal-input'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900 album-modal-title'
                      >
                        Artista:
                      </label>
                      <div className='mt-2'>
                        <input
                          id='name'
                          name='name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 album-modal-input'
                          value={artist}
                          onChange={(e) => setArtist(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900  album-modal-title'
                      >
                        Data de Lançamento:
                      </label>
                      <div className='mt-2'>
                        <input
                          id='name'
                          name='name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 album-modal-input'
                          value={launchDate}
                          onChange={(e) => setLaunchDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <AlbumList
                      albumList={albumList}
                      albumId={String(albumId)}
                      setAlbumId={setAlbumId}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                onClick={() => handleSave()}
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
              >
                Salvar
              </button>
              {disableButton()}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default MusicModal;
