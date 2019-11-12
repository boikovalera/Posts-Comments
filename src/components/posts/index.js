import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PostList from './PostList'
import Comments from '../comments/index'
import config from '../../config'

export default function Post() {

  //const match = useRouteMatch();
  //const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [textPost, setTextPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(config.postUrl).then(res => setPosts(res.data));
  }, [])
  
  function onChange(post) {
    console.log(post.id+" - "+post.body)
    axios.get(`${config.postUrl}?id=${post.id}`).then(res => setTextPost(res.data.body));
    axios.get(`${config.postUrl}/id=${post.id}/comments`).then(res => setComments(res.data));
  }
     
  return (                        
    <>
      <div className="row">
        <PostList 
          posts={posts}
          onChange={onChange}/>
      </div>
      <div className="row">
        <Comments comments={comments}/>
      </div>
    </>
  )    
}