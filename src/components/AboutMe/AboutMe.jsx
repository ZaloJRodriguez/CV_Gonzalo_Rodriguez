import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import { TbTicTac } from "react-icons/tb";
import { TiCloudStorage } from "react-icons/ti";













import './AboutMe.css'

function AboutMe() {
    return (

        <div className='aboutMe'>
            <h3 className="about">About Me</h3>

            <div className='card-container'>
                <GiTechnoHeart className="heart" size={50}/>
                <h4 className='tech'>Technologies learned:</h4>
                <div className='tech-list'>
                    <ul>
                        <li><p>HTML5</p> <FaHtml5 className="html"  size={50}/></li>
                        <li><p>CSS</p> <FaCss3Alt className="css"  size={50}/></li>
                        <li><p>JavaScript</p> <IoLogoJavascript className="js"  size={50}/></li>
                        <li><p>MySQL</p> <SiMysql className="sql"  size={50}/></li>
                        <li><p>Node.js</p> <FaNodeJs className="node"  size={50}/></li>
                        <li><p>REACT</p> <FaReact className="react"  size={50}/></li>
                    </ul>

                </div>

                <FaAddressCard className="id-logo" size={50} />
                <h4 className="Personal_info">Personal Info:</h4>
                <div className="story">
                    <p>Hi, my name is Gonzalo Jesús Rodríguez Rodríguez. I was born on February 17, 1993, in Viveiro, a small coastal town in northern Galicia (Spain). For the past 12 years, I have been living in Vigo, where I trained as a hospitality professional and built my career in that sector for 10 years. Additionally, I lived for a short period in Barcelona. </p>

                    <p>However, one of my passions has always been technology, and as I am an ambitious person with a thirst for knowledge and improvement, I have decided to fully immerse myself in the world of programming through Hack A Boss and its FullStack Web Developer bootcamp.
                    </p>

                    <p>Now, with my training completed, I continue to study and learn day by day as I prepare to start my professional career within the technology sector.</p>

                </div>

                <LuBrainCircuit className="brain" size={50} />
                <h4 className="Skills">Soft Skills:</h4>
                <div className="skill-list">
                    <ul>
                        <li>High Learning Capacity</li>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Curiosity</li>
                        <li>Time Management</li>
                        <li>Ability to Work Under Pressure</li>
                        <li>Adaptability</li>
                        <li>Openess to Feedback</li>
                        <li>Motivation</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>

                <FaGears className="gear" size={50} />
                <h4 className="portfolio">Portfolio:</h4>

                <div className="portfolio_container">
                    <article className="portfolio_item">
                        <MdCatchingPokemon size={50} className="poke" color="red"/>

                        <h3>Pokédex - Hack A Boss</h3>
                        <a href="https://github.com/ZaloJRodriguez/Pokedex-HackABoss" className="btn" target="blank">Github</a>
                        <span style={{ marginRight: '15px' }}></span>
                        <a href="https://pokedexhab23.netlify.app/" className="btn-primary" target="blank">Live Demo</a>
                    </article>

                    <article className="portfolio_item">
                        <TbTicTac size={50} className="tic" color="green"/>

                        <h3>Tic, Tac, Toe!</h3>
                        <a href="https://github.com/ZaloJRodriguez/TIC-TAC-TOE/tree/master" className="btn" target="blank">Github</a>
                        <span style={{ marginRight: '15px' }}></span>
                        <a href="https://tic-tac-toe-hab.netlify.app/" className="btn-primary" target="blank">Live Demo</a>
                    </article>

                    <article className="portfolio_item">
                        <TiCloudStorage size={50} className="cloud" color="cyan"/>

                        <h3>Your Cloud - Online Storage</h3>
                        <a href="https://github.com/Riyadaram/PROYECTO_FINAL" className="btn" target="blank">Github</a>
                        <span style={{ marginRight: '15px' }}></span>
                        <a href="" className="btn-primary">Live Demo - Soon</a>
                    </article>
                </div>
                



            </div>

            <div className="end">
                <h5>Gonzalo Jesús Rodríguez - Hard Work and Learning</h5>
            </div>

        </div>
        

    );
}

export default AboutMe;