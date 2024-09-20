'use client';

import React from 'react';
import ListProps from '@/interfaces/ListProps';

const List: React.FC<ListProps> = ({ data, clickFunction }) => {
  return (
    <div className='list-div'>
      <ul
        role='list'
        className='divide-y divide-gray-100'
        onClick={clickFunction}
      >
        {data.map((a) => {
          const isoDateString = a.launch_date;
          const dateObject = new Date(isoDateString);
          const formattedDate = dateObject.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <li
              key={a.name}
              id={String(a.id)}
              className='flex justify-between gap-x-6 py-5'
            >
              <div className='flex min-w-0 gap-x-4'>
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
