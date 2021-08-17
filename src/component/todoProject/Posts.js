import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
<div className="container">
<div className="row ">
{posts.map(post => (
  <div className="card col-md-4 bg-secondary" key={post.id} style={{height: "15rem"}} >
     <img className="card-img-top " src={post.avatar} style={{height: "10rem"}}alt="Card image cap" />
    <div className="card-body p-2">
    <h5 className="card-title">Email: {post.email}</h5>
    <p className="card-text"><b>Name: </b>{post.first_name} {post.last_name}</p>    
  </div>
 </div>
 ))} 
 </div>
</div> 
  );
};

export default Posts;
