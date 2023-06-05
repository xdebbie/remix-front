import { useEffect, useState } from 'react';
import { fetchSongs } from '../../services/api/SongData/SongData';
import { Wrapper, SongHeader, SongItem } from './SongList.styled';

interface Song {
  _id: string;
  album: string;
  artist: string | string[];
  artwork: string;
  label: string;
  length: string;
  title: string;
  year: string;
  spotify: string;
  apple: string;
}

export const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
      } catch (error) {
        console.error('Error fetching songs: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Song List</h1>
      <SongHeader>
        <p></p>
        <p>Title</p>
        <p>Artist</p>
        <p>Album</p>
        <p>Label</p>
        <p>Year</p>
        <p>Length</p>
        <p>Spotify</p>
        <p>Apple Music</p>
      </SongHeader>
      {songs.map((song) => (
        <SongItem key={song._id}>
          <img src={song.artwork} alt="Artwork" />
          <p>{song.title}</p>
          <p>{Array.isArray(song.artist) ? song.artist.join(', ') : song.artist}</p>
          <p>{song.album}</p>
          <p>{song.label}</p>
          <p>{song.year}</p>
          <p>{song.length}</p>
          <p><a href={song.spotify}>Spotify</a></p>
          <p><a href={song.apple}>Apple Music</a></p>
        </SongItem>
      ))}
    </Wrapper>
  );
};
