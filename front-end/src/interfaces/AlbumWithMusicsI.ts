import MusicI from "./MusicI";

interface AlbumWithMusicsI {
  id?: number;
  name: string;
  artist: string;
  launch_date: string;
  active: boolean;
  musics: MusicI[];
}

export default AlbumWithMusicsI;
