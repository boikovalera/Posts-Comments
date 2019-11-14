import React from 'react'
import Header from '../header/index'
import CommentItem from './CommentItem'
import './Comments.css'

export default function Comments({comments}) {
    
    return (
        <>
            <Header text="Comments"/>        
            <div className="comments-area">
                <ul className="ul-comments">
                    {comments.map(comment => (                    
                        <CommentItem
                            key={comment.id}
                            comment={comment} 
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}