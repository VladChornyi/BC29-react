import "./App.css";
import PostList from "./PostList";

function App() {
  const myTitle= 'Name'
  return (
    <>
      <h2 className="header-title">Котик на диете - несчастный котик</h2>
      <PostList title={myTitle}/>
    </>
  );
}

export default App;
