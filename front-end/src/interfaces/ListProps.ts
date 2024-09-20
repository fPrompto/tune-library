import AlbumI from "./AlbumI";
import MusicI from "./MusicI";

interface ListProps {
  data: AlbumI[] | MusicI[];
  clickFunction: (e: React.MouseEvent<HTMLUListElement>) => void;
}

export default ListProps;
