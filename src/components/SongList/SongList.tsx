import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchSongs } from '../../services/api/SongData/SongData';
import { AddSongForm } from '../AddSongForm/AddSongForm';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Wrapper, SongHeader, SongItem, Popover, ButtonRow } from './SongList.styled';

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
  const [deletePopoverAnchor, setDeletePopoverAnchor] = useState<HTMLButtonElement | null>(null);
  const [songToDelete, setSongToDelete] = useState<Song | null>(null);


  const apiUrl = process.env.REACT_APP_API_URL || '';

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

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

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

  const handleOpenDeletePopover = (event: React.MouseEvent<HTMLButtonElement>, song: Song) => {
    setSongToDelete(song);
    setDeletePopoverAnchor(event.currentTarget);
  };

  const handleConfirmDelete = async () => {
    if (songToDelete) {
      try {
        // Delete the song using its id
        await axios.delete(`${apiUrl}/${songToDelete._id}`);
        const updatedSongs = await fetchSongs();
        setSongs(updatedSongs);
      } catch (error) {
        console.error('Error deleting song:', error);
      }
    }

    setDeletePopoverAnchor(null);
    setSongToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeletePopoverAnchor(null);
    setSongToDelete(null);
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
          <p><a href={song.spotify} target="_blank" rel="noopener noreferrer">Spotify</a></p>
          <p><a href={song.apple} target="_blank" rel="noopener noreferrer">Apple Music</a></p>
          <td>
            <button onClick={(event) => handleOpenDeletePopover(event, song)}>
              <DeleteIcon />
            </button>
          </td>
        </SongItem>
      ))}
      <Popover
        open={Boolean(deletePopoverAnchor)}
        anchorEl={deletePopoverAnchor}
        onClose={handleCancelDelete}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <p>Do you really want to delete this song?</p>
        <ButtonRow>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Delete
          </Button>
        </ButtonRow>
      </Popover>
    </Wrapper>
  );
};
