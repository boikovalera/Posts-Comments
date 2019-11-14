import React from 'react'
import './Comments.css'

export default function CommentItems({comment}) {

    
    return (
        
         <li className="li-comments-item">
             <h3>{comment.name}</h3>
             <h4>{comment.email}</h4>
             <span>{comment.body}</span>
         </li>   
        
    )
}