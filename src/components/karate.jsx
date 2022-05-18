import React from 'react';
import Next from '../components/btns/next';
import Line from '../components/design/line';
import Image from '../components/design/image-box';
import Text from '../components/design/text-box';
import {karate} from '../components/resources/images';

function Karate() {
    return (
        <div className='karate zk-content' id='karate'>
            <Text 
                title='Karate kiddo'
                text={["For the physical part I'm on a warrior's journey from small feet. By the age of 6, I had already put on a kimono and was quick to try out in the kata category competitions. At the age of 15, I passed the exam for a master, which I later endorsed at the age of 18 with the Japanese Sensei Masahiko Tanaka.", <><br/><br/></>, "Today as head coach I guide a group of beginners and higher level karatekas, of all ages."]}
                stil='zk-block zk-bg-color zk-block-text-left' 
            />
            <Image 
                img={karate} 
                alt='karate diploma' 
                stil='zk-img-right zk-rounded' 
            />
            <div className='zk-center zk-mt-4'>
                <Next 
                    loc="dev" 
                    stil="btn-next" 
                />
            </div>
            <Line />
        </div>
    );
    
}

export default Karate;