import React from 'react';

function Link(props) {
    return(
        <a href={props.href} target='_blank' rel="noreferrer">
            <img className='pic' src={props.img} alt={props.alt} />
        </a>
    )
}

export default Link;