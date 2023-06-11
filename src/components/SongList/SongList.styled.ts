import styled from '@emotion/styled';
import { Popover as MUIPopover } from '@mui/material';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SongHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid #000;
  display: grid;
  font-weight: bold;
  gap: 10px;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 0;
  
  img {
    height: 50px;
    object-fit: cover;
    width: 50px;
  }
`;

export const SongItem = styled.div`
  align-items: center;
  border-bottom: 1px solid #eee;
  display: grid;
  gap: 10px;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 0;

  img {
    height: 50px;
    object-fit: cover;
    width: 50px;
  }
`;

export const Popover = styled(MUIPopover)`
  margin-top: 4px;

  & .MuiPaper-root  {
    box-shadow: 2px 5px 15px 5px rgba(0,0,0,0.19);
    padding: 4px 18px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;