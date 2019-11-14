import React from 'react'
import './index.css'
import PropTypes from '../../propTypes';

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

Header.prototype = {
    text: PropTypes.string
}