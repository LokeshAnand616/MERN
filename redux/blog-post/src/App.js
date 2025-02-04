import './App.css';
import PostAdd from './features/posts/postAdd';
import PostAuthor from './features/posts/postAuthor';
import PostList from './features/posts/posts';

function App() {
  return (
    <div className="App">
      <PostAdd/>
      <PostList/>
      <PostAuthor/>
    </div>
  );
}

export default App;
