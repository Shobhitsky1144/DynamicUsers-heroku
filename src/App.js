import React, { useState, useEffect } from 'react';
import Posts from './component/todoProject/Posts';
import Pagination from './component/todoProject/Pagination';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1)

  const getItem=(number)=>{
     console.log(number)
     setcurrentPage(number)
     fetchPosts(currentPage)
  }
  const fetchPosts = async (page) => {
    setLoading(true);
    const res=await fetch(`https://reqres.in/api/users?page=${page}`)
    const p=await res.json();
    setPosts(p.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchPosts(currentPage);
  }, []);

 
  return (
    <div className='container mt-1'>
      <h1 className='text-warning mb-3 text-center bg-secondary'> List of Users</h1>
      <Posts posts={posts} loading={loading} />
      <Pagination
        getItem={getItem} currentPage={currentPage}
      />
    </div>
  );
};

export default App;
