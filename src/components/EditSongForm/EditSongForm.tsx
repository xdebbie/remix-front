import { ChangeEvent } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface EditSongProps {
  editedSong: Song | null;
  isDialogOpen: boolean;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>, field: keyof Song) => void;
  handleUpdateSong: () => void;
  handleCloseDialog: () => void;
}

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

export const EditSongForm = ({
  editedSong,
  isDialogOpen,
  handleInputChange,
  handleUpdateSong,
  handleCloseDialog
}: EditSongProps) => {
  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>Edit Song</DialogTitle>
      <DialogContent>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedSong?.title || ''}
              onChange={(e: any) => handleInputChange(e, 'title')}
            />
          </div>
          <div>
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={editedSong?.artist || ''}
              onChange={(e: any) => handleInputChange(e, 'artist')}
            />
          </div>
          <div>
            <label htmlFor="album">Album:</label>
            <input
              type="text"
              id="album"
              name="album"
              value={editedSong?.album || ''}
              onChange={(e: any) => handleInputChange(e, 'album')}
            />
          </div>
          <div>
            <label htmlFor="label">Label:</label>
            <input
              type="text"
              id="label"
              name="label"
              value={editedSong?.label || ''}
              onChange={(e: any) => handleInputChange(e, 'label')}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={editedSong?.year || ''}
              onChange={(e: any) => handleInputChange(e, 'year')}
            />
          </div>
          <div>
            <label htmlFor="length">Length:</label>
            <input
              type="text"
              id="length"
              name="length"
              value={editedSong?.length || ''}
              onChange={(e: any) => handleInputChange(e, 'length')}
            />
          </div>
          <div>
            <label htmlFor="spotify">Spotify link:</label>
            <input
              type="text"
              id="spotify"
              name="spotify"
              value={editedSong?.spotify || ''}
              onChange={(e: any) => handleInputChange(e, 'spotify')}
            />
          </div>
          <div>
            <label htmlFor="apple">Apple Music link:</label>
            <input
              type="text"
              id="apple"
              name="apple"
              value={editedSong?.apple || ''}
              onChange={(e: any) => handleInputChange(e, 'apple')}
            />
          </div>
          <div>
            <label htmlFor="artwork">Artwork link:</label>
            <input
              type="text"
              id="artwork"
              name="artwork"
              value={editedSong?.artwork || ''}
              onChange={(e: any) => handleInputChange(e, 'artwork')}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleUpdateSong} variant="contained" color="primary">
          Update Song
        </Button>
      </DialogActions>
    </Dialog>
  );
};
