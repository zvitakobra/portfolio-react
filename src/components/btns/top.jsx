import React from 'react';
import {Link} from 'react-scroll';
import {arrowup} from '../../components/resources/images';

function Top() {

    React.useEffect(() =>  {
        let scrollTop = document.getElementById("btn-up");
        
        window.onload = () => {
            scrollTop.style.visibility = "hidden";
            scrollTop.style.opacity = 0;
        }

        window.onscroll = () => {
            if (window.scrollY > 500) {
                scrollTop.style.visibility = "visible";
                scrollTop.style.opacity = .7;
            } else {
                scrollTop.style.visibility = "hidden";
                scrollTop.style.opacity = 0;
            }
        };
    }, [] );
    
    return(
        <>
            <Link to='intro' spy={true} smooth={true}>
                <span className='btn-up' id='btn-up'>
                    <img src={arrowup} alt="btn-up" width="50" height="20" />
                </span>
            </Link>
        </>
    );
}
 
export default Top;