import styled from '@emotion/styled';

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