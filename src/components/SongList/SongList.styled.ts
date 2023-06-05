import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SongHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 2px solid #000;
  gap: 10px;
  
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

export const SongItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;