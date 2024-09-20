import AlbumI from './AlbumI';

interface AlbumModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  data: AlbumI;
  type: 'update' | 'add';
}

export default AlbumModalProps;
