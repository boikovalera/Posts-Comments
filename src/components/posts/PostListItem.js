import React from 'react'
import PropTypes from '../../propTypes';
import './Posts.css'

export default function PostListItem({ post, onChange }) {
    
    function onChangeCheckCard(e) {
        onChange(post);
    }

    return (        
        <li className="li-item" onClick={onChangeCheckCard}>{post.title}</li>
    )
}

PostListItem.prototype = {
    post: PropTypes.post,
    onChange: PropTypes.func.isRequired
}