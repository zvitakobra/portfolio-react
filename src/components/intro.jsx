import React from 'react';
import '../css/main.css';
import Next from '../components/btns/next';

function Intro() {
    return (
        <>
            <div className='intro' id='intro'>
                <div className='zk-intro zk-bg-color zk-center'>
                    <h3>
                        Kevin Gros
                    </h3>
                    <hr />
                    <span>Man, son, brother, friend, sensei, baller and dev</span>
                </div>
                <Next loc="about" stil="btn-intro" />
            </div>
        </>
    );
}
 
export default Intro;