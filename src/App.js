import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Posts from './components/posts/index'
import Comments from './components/comments/index'
import Form from './components/form/index'
import config from './config'
  
export default function App() {

  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState(config.getEmptyPost);
  const [comments, setComments] = useState([]);
      
  useEffect(() => {
    axios.get(config.postUrl).then(res => setPosts(res.data));
  }, [])

  function onChange(item) {    
    axios.get(`${config.postUrl}?id=${item.id}`).then(res => setSelectPost(res.data[0]));
    axios.get(`${config.postUrl}/id=${item.id}/comments`).then(res => setComments(res.data));
  }

  function onSave(item) {    
    axios.post(`${config.commentUrl}`, { 
      "postId": selectPost.id,         
      "name": item.name,
      "email": item.email,
      "body": item.message       
    }).then(res => {        
        setComments([...comments, res.data]);
    })
  }

  return (
    <div className="app">
      <Posts
        posts={posts}
        selectPost={selectPost}
        onChange={onChange}
      />
      <Comments 
        comments={comments}
      />
      <Form 
        selectPost={selectPost}
        onSave={onSave}
      />
    </div>
  );
}