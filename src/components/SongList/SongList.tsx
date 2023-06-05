import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchSongs } from '../../services/api/SongData/SongData';
import { AddSongForm } from '../AddSongForm/AddSongForm';
import { Wrapper, SongHeader, SongItem } from './SongList.styled';

interface Song {
  _id?: string;
  title: string;
  artist: string | string[];
  album: string;
  label: string;
  year: string;
  length: string;
  spotify: string;
  apple: string;
  artwork: string;
}

export const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Fetch songs data when the component mounts
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

  const apiUrl = process.env.REACT_APP_API_URL || '';

  const handleAddSong = async (newSongData: Song) => {
    try {
      setIsAdding(true);
      // Send a POST request to add a new song
      await axios.post(apiUrl, newSongData);
      // Fetch the updated songs data
      const updatedSongs = await fetchSongs();
      setSongs(updatedSongs);
      setIsAdding(false);
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error adding song: ', error);
      setIsAdding(false);
    }
  };

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Wrapper>
      <h1>Song List</h1>
      {isFormOpen ? (
        <AddSongForm onAddSong={handleAddSong} isAdding={isAdding} />
      ) : (
        <button onClick={handleToggleForm}>Add a new song</button>
      )}
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
