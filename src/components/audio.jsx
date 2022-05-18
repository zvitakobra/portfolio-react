import React from 'react';
import Image from '../components/design/image-box';
import Text from '../components/design/text-box';
import {audio} from '../components/resources/images';

function Audio() {
    return (
        <div className='audio zk-content' id='audio'>
            <Text 
                title='Street sounds'
                text={["For developing creativity I'm a member of underground music group called BHB, made of three street brothers, creating mainly oldschool boom bap and g-funk style hip hop tunes.", <><br/><br/></>, "We came together with one desire and that is expressing ourself and our lifes. My role as audio engineer is recording vocals, mixing and mastering the tracks.", <><br/><br/></>, "Recorded more than 30 demos and currently perfecting our first album."]}
                stil='zk-block zk-bg-color zk-block-text-left' 
            />
            <Image 
                img={audio} 
                alt='bhb cover' 
                stil='zk-img-right zk-rounded' 
            />
        </div>
    )
}

export default Audio;