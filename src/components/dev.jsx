import React from 'react';
import Next from '../components/btns/next';
import Image from '../components/design/image-box';
import Text from '../components/design/text-box';
import {dev} from '../components/resources/images';

function Dev() {
    return (
        <div className='dev zk-content' id='dev'>
            <Text 
                title='Digital realm'
                text={["For satisfying my urge for constant stimulation of my brain cells I chose software development at a young age. Self learning the arts of software programming, with baby steps, from way back in 2003/04. Since then I crawled my way through computer high school in Ravne na Koroškem, from where my path led me to two year college for software engineer, which I graduated in October 2019.", <><br/><br/></>, "I was just playfully surfing through programming knowledge to get to the point where I am now, developing web apps using Oracle framework and web apps with Javascript frameworks and libraries for back and frontend and using MySQL for storing data."]}
                stil='zk-block zk-bg-color zk-block-text-right' 
            />
            <Image 
                img={dev} 
                alt='express source code' 
                stil='zk-img-left zk-rounded' 
            />
            <div className='zk-center zk-mt-4 zk-pb-4'>
                <Next 
                    loc="tech" 
                    stil="btn-next" 
                />
            </div>
        </div>
    );
}

export default Dev;