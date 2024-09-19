interface AlbumMusic {
  id: string;
  name: string;
  artist: string;
  launch_date: string;
}

interface ListProps {
  data: AlbumMusic[];
  clickFunction: (e: React.MouseEvent<HTMLUListElement>) => void;
}

export default ListProps;
