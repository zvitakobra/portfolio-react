import React from 'react';
import {info} from '../components/resources/images';

function Info() {
    return (
        <div className='info zk-content' id='info'>
            <div className='zk-block zk-bg-color zk-block-text-left'>
                <div className='zk-text-block'>
                    <h3>Want more?</h3>
                    <span>
                    No info
                    </span>
                </div>
            </div>
            <div className='zk-block'>
                <div className='zk-img-block'>
                    <img src={info} alt='info' className='zk-img-right zk-rounded' />
                </div>
            </div>
            <div className='zk-pt-5 zk-pb-5'>
                <hr />
            </div>
        </div>
    );
}

export default Info;