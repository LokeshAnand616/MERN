import './App.css';
import PostAdd from './features/posts/postAdd';
import PostList from './features/posts/posts';

function App() {
  return (
    <div className="App">
      <PostAdd/>
      <PostList/>
    </div>
  );
}

export default App;
