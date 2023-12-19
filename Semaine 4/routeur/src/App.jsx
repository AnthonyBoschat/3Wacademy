import {Link, Route, Routes, BrowserRouter as Routeur} from "react-router-dom"
import Details from "./Components/Details";

function App() {

  const roots = () => (
    <Routes>
      <Route path="/" element={null}/>
      <Route path="Details/:postID" element={<Details posts = {posts}/>}/>
    </Routes>
  )
  
  const posts = [
    {id : 1, title : "MySQL", content:"MySQL est un language qui permet de dialoguer avec des bases de données."},
    {id : 2, title : "PHP", content:"PHP est un language de programmation coté backend."},
    {id : 3, title : "React", content:"React est une librairie de Javascript."},
  ];
  
  const generatePost = (post) => (
    <li key={post.id}>
      <Link to={`Details/${post.id}`}>{post.title}</Link>
    </li>
  )

  return (
    <Routeur>
      <nav>
        <ul>
          <li key={0}>
            <Link to="/">Acceuil</Link>
          </li>
          {posts.map(post => generatePost(post))}
        </ul>
      </nav>
      {roots()}
    </Routeur>
  );
}

export default App;
