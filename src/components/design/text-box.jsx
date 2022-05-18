import React from 'react';

function Text(props) {
    return(
        <>
            <div className={props.stil}>
                <div className='zk-text-block'>
                    <h3>{props.title}</h3>
                    <span>
                        {props.text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Text;