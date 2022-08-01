import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import {
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([
    {
      "id": 1,
      "title": "1st post",
      "datetime": "July 16, 2021 11:47:39 AM",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 2,
      "title": "Second post",
      "datetime": "July 16, 2021 11:47:48 AM",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
    },
    {
      "id": 3,
      "title": "Number Three New",
      "datetime": "April 08, 2022 9:29:06 PM",
      "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 4,
      "title": "Testing a 4th post",
      "datetime": "April 08, 2022 9:06:23 AM",
      "body": "Some more testing paragraphs!"
    },
    {
      "id": 5,
      "title": "Fifth post",
      "datetime": "April 09, 2022 8:12:52 AM",
      "body": "again"
    }

  ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDelete=((id) => {

  });
  
  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" index element={<Home posts={posts} />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
