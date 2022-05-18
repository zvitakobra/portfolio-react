import React from 'react';
import Next from '../components/btns/next';
import Line from '../components/design/line';
import Link from '../components/design/link';
import {html, bs, css, sass, js, react, apex, php, node, ex, csharp, java, py, ms, ora} from '../components/resources/images';

function Tech() {
    return (
        <div className='zk-content zk-center' id='tech'>
            <div className='zk-block zk-bg-color'>
                <div className='zk-text-block zk-center'>
                    <h3>Working with</h3>
                    <h4>
                        <i>Frontend</i>
                    </h4>
                    <div className='tech'>
                        <Link href="https://html.com/html5/" img={html} alt="html" />
                        <Link href="https://css3.com/" img={css} alt="css" />
                        <Link href="https://sass-lang.com/" img={sass} alt="sass" />
                        <Link href="https://www.javascript.com/" img={js} alt="javascript" />
                        <Link href="https://getbootstrap.com/" img={bs} alt="bootstrap" />
                        <Link href="https://reactjs.org/" img={react} alt="reactjs" />
                        <Link href="https://apex.oracle.com/en/" img={apex} alt="apex" />
                    </div>
                    <h4>
                        <u>Backend</u>
                    </h4>
                    <div className='tech'>
                        <Link href="https://www.javascript.com/" img={js} alt="javascript" />
                        <Link href="https://nodejs.org/en/" img={node} alt="nodejs" />
                        <Link href="https://expressjs.com/" img={ex} alt="express" />
                        <Link href="https://www.w3schools.com/cs/index.php" img={csharp} alt="csharp" />
                        <Link href="https://www.php.net/" img={php} alt="php" />
                        <Link href="https://www.java.com/en/" img={java} alt="java" />
                        <Link href="https://www.python.org/" img={py} alt="python" />
                    </div>
                    <h4>
                        <u>Database</u>
                    </h4>
                    <div className='tech'>
                        <Link href="https://www.mysql.com/" img={ms} alt="mysql" />
                        <Link href="https://www.oracle.com/database/technologies/application-development-pl/sql.html" img={ora} alt="oracle plsql" />
                    </div>
                </div>
            </div>
            <div className='zk-center zk-mt-4'>
                <Next loc="audio" stil="btn-next" />
            </div>
            <Line />
        </div>
    );
}

export default Tech;