'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Disclosure,
  DisclosureButton,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(
  ...classes: (string | boolean | null | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC = () => {
  const [currentAlbum, setCurrentAlbum] = useState(true);
  const [currentMusic, setCurrentMusic] = useState(false);

  const router = useRouter();

  const clickAlbum = () => {
    router.push('/');
    setCurrentMusic(false);
    setCurrentAlbum(true);
  };

  const clickMusic = () => {
    router.push('/musics');
    setCurrentAlbum(false);
    setCurrentMusic(true);
  };

  const navigation = [
    { name: 'Álbuns', onClick: clickAlbum, current: currentAlbum },
    { name: 'Músicas', onClick: clickMusic, current: currentMusic },
  ];

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block h-6 w-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt='Your Company'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                className='h-8 w-auto'
              />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={item.onClick}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Header;
