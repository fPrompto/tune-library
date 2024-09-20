import React from 'react';
import AlbumI from "./AlbumI"

interface AlbumListProps {
  albumList: AlbumI[];
  albumId: string;
  setAlbumId: React.Dispatch<React.SetStateAction<number>>;
}

export default AlbumListProps;
