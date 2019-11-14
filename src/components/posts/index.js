import React from 'react'
import Header from '../header/index'
import PostListItem from './PostListItem';
import PostMessage from './PostMessage'

export default function Post({posts, selectPost, onChange}) {
    
    return (
        <>
            <Header text="Posts"/>
            <div className="row post">
                <div className="post-area">                    
                    <ul className="ul-posts">                                           
                        {posts.map(post => (
                            <PostListItem 
                                key={post.id}
                                post={post}
                                onChange={onChange}
                            />
                        ))}                            
                    </ul>                        
                </div>
                <div className="post-area">
                    <PostMessage                        
                        selectPost={selectPost}                        
                    />
                </div>
            </div>
        </>        
    );
}