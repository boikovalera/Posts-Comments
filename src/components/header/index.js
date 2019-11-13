import React from 'react'
import './index.css'

export default function Header({text}) {
    return (
        <div className="row">            
            <div className="header">
                <div className="col s12">
                    <span className="brand-logo">{text}</span>                        
                </div>
            </div>            
        </div>
    )
}