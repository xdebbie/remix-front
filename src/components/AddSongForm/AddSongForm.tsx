import { useState, ChangeEvent, FormEvent } from 'react';

interface AddSongProps {
  isAdding: boolean;
  onAddSong: (newSongData: Song) => void;
}

interface Song {
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

export const AddSongForm = ({ onAddSong, isAdding }: AddSongProps) => {
  const [newSongData, setNewSongData] = useState<Song>({
    title: '',
    artist: '',
    album: '',
    label: '',
    year: '',
    length: '',
    spotify: '',
    apple: '',
    artwork: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSongData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  try {
    // Call the callback function to update the song list
    onAddSong(newSongData);

    // Reset the form
    setNewSongData({
      title: '',
      artist: '',
      album: '',
      label: '',
      year: '',
      length: '',
      spotify: '',
      apple: '',
      artwork: ''
    });
  } catch (error) {
    console.error('Error creating song:', error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new song</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newSongData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={newSongData.artist}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={newSongData.album}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Label:</label>
        <input
          type="text"
          id="label"
          name="label"
          value={newSongData.label}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={newSongData.year}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Length:</label>
        <input
          type="text"
          id="length"
          name="length"
          value={newSongData.length}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Spotify link:</label>
        <input
          type="text"
          id="spotify"
          name="spotify"
          value={newSongData.spotify}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Apple Music link:</label>
        <input
          type="text"
          id="apple"
          name="apple"
          value={newSongData.apple}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="album">Artwork link:</label>
        <input
          type="text"
          id="artwork"
          name="artwork"
          value={newSongData.artwork}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Song'}
      </button>
    </form>
  );
};
