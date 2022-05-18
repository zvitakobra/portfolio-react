import React from 'react';
import Next from '../components/btns/next';
import Line from '../components/design/line';
import Image from '../components/design/image-box';
import Text from '../components/design/text-box';
import {about} from '../components/resources/images';

function About() {
    return (
        <div className='about zk-content' id='about'>
            <Text 
                title='Long story short'
                text={["Free spirit, karate instructor and software engineer. Born and raised in Slovenj Gradec, little village on the north of a tiny country named Slovenia, somewhere in the middle of Europe.", <><br/><br/></>, "Because of my father, karate has always been a part of my life. Training since my 5th year and I'm not gonna quit any time soon. I tried myself in many sports and currently I'm in karate, swimming, running, strength workouts and meditation.", <><br/><br/></>, " Working 40h/week as a software developer and in my free time I learn software technologies and moderate and provide technical support in music group, Dnevna soba studio."]}
                stil='zk-block zk-bg-color zk-block-text-right' 
            />
            <Image 
                img={about} 
                alt='me myself and i' 
                stil='zk-img-left zk-rounded' 
            />
            <div className='zk-center zk-mt-4'>
                <Next 
                    loc="karate" 
                    stil="btn-next" 
                />
            </div>
            <Line />
        </div>
    );
}

export default About;