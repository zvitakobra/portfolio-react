import React from 'react';

function Image(props) {
    return(
        <>
            <div className='zk-block'>
                <div className='zk-img-block'>
                    <img src={props.img} alt={props.alt} className={props.stil} />
                </div>
            </div>
        </>
    )
}

export default Image;