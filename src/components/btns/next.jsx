import React from 'react';
import {Link} from 'react-scroll';
import {arrowdown} from '../../components/resources/images';

function Next(props) {
    return(
        <>
            <Link to={props.loc} spy={true} smooth={true}>
                <span className={props.stil}>
                    <img src={arrowdown} alt="btn-down" width="70" height="30" />
                </span>
            </Link>
        </>
    )
}
 
export default Next;