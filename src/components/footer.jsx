import React from 'react';
import Link from '../components/design/link';
import {fb, ig, li, git} from '../components/resources/images';

function Footer() {
    return(
        <>
            <div className="zk-center" id='footer'>
                <div className='social'>
                    <Link href="https://www.facebook.com/kevinzerogros/" img={fb} alt="facebook" />
                    <Link href="https://www.instagram.com/zvitakobraofficial/" img={ig} alt="instagram" />
                    <Link href="https://www.linkedin.com/in/kevin-gros-48911b33/" img={li} alt="linkedin" />
                    <Link href="https://github.com/zvitakobra" img={git} alt="github" />
                </div>
                <div>
                    Copyright &copy; zvitakobra - May '22
                </div>
            </div>
        </>
    );
}

export default Footer;