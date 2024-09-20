import MusicI from './MusicI';

interface MusicModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  data: MusicI;
  type: 'update' | 'add';
}

export default MusicModalProps;
