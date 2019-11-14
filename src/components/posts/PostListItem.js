import React from 'react'
import './Posts.css'

export default function PostListItem({ post, onChange }) {
    
    function onChangeCheckCard(e) {
        onChange(post);
    }

    return (        
        <li className="li-item" onClick={onChangeCheckCard}>{post.title}</li>
    )
}