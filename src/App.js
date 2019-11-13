import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header/index'
import PostList from './components/posts/index'
import Comments from './components/comments/index'
import CommentForm from './components/comments/CommentForm'
import config from './config'
import PostMessage from './components/posts/PostMessage'
import './index.css'
  
export default function App() {

  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState(config.getEmptyPost);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(config.postUrl).then(res => setPosts(res.data));
  }, [])

  function onChange(item) {
    //console.log(item.id + " - " + item.body)
    axios.get(`${config.postUrl}?id=${item.id}`).then(res => setSelectPost(res.data));
    axios.get(`${config.postUrl}/id=${item.id}/comments`).then(res => setComments(res.data));
  }

  return (
    <>
      <Header text="Posts"/>
      <div className="row post">
        <div className="post-area">
          <PostList
            posts={posts}
            onChange={onChange} />
        </div>
        <div className="post-area">
          <PostMessage
            selectPost={selectPost}
          />
        </div>
      </div>
      <Header text="Comments"/>
      <div className="row">
        <Comments comments={comments} />
      </div>
      <Header text="Add comment"/>
      <div className="row">
        <CommentForm/>
      </div>
    </>
  );
}
