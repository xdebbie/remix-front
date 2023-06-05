import { Sidebar } from './components/Sidebar/Sidebar';
import { SongList } from './components/SongList/SongList';
import { Wrapper } from './App.styled';

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <SongList />
    </Wrapper>
  );
}

export default App;
