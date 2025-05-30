import "./App.css";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Layout from "./Layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from 'date-fns'
import api from './api/posts';
import EditPost from "./EditPost";
// import useWindowSize from "./hooks/useWindowSIze";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);[]
  const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const Navigate = useNavigate();
  //const {width} = useWindowSize()

  useEffect(() => {
    const fetchPost = async () => {
      try{
        const response = await api.get('./posts');
        setPosts(response.data);
      }catch(err){
          if (err.response){
          // Not in the 200 response in range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          }else{
            console.log(`Error: ${err.message}`);
          }
      }
    }
    fetchPost();
    },[])

  useEffect(()=>{
    const filterResult = posts.filter(post => 
       ((post.body).toLowerCase()).includes(search.toLowerCase())
       ||  ((post.title).toLowerCase()).includes(search.toLowerCase())
      )

    setSearchResult(filterResult.reverse());
   
      
  },[posts,search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const dateTime = format(new Date(),'MMMM dd,yyyy pp');
    const newPost = {id,title: postTitle ,dateTime,body: postBody};
    try{
      const response = await api.post('/posts',newPost);
      const allPost = [...posts,response.data];
      setPosts(allPost);
      setPostTitle('');
      setPostBody('');
      Navigate('/');
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  };

  

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
      Navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      Navigate("/");
    }catch(err){
      console.log(`Error: ${err.message}`);
    }

  };

  return (
    <div className="App">
      <Routes> 
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />} // Parent folder or parent path is defined in the Layout.jsx
        >
          <Route path="/" element={<Home posts={searchResult} />} /> {/*Children of the parent route */}
          <Route
            path="/post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route path="/edit/:id"
           element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />  

           }
            />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
