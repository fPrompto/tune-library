import AlbumI from "./AlbumI"

interface AlbumListProps {
  albumList: AlbumI[];
  albumId: string;
  setAlbumId: (id: string) => void;
}

export default AlbumListProps;
