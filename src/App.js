import './App.css';
import Pdf from './resources/Siarhei Povad - Java Developer - CV.pdf';
import profilePhoto from './resources/profile.jpg';

function App() {
    return (
        <div className="App">

            <div className="container">
                <div className="left-side">
                    <div className="profile-info">
                        <img src={profilePhoto} className="profile-photo" alt="photo"/>
                        <h3>Siarhei Povad</h3>
                        <span>Java developer</span>
                    </div>

                    <h4>Contact</h4>

                    <li>+375 29 123-45-67</li>
                    <li>povodsa@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/siarhei-povad-472009212/" target="_blank">LinkedId</a></li>
                    <li><a href="https://github.com/introby" target="_blank">Projects on Github</a></li>
                    <br/>
                    <li>Belarus</li>

                    <h4>Personal qualities</h4>

                    <li>Open for new knowledge</li>
                    <li>Attention to detail</li>
                    <li>Teamwork</li>
                    <br/>
                    <li>English - B1</li>
                    <li>German</li>

                    <h4>Hobbies</h4>

                    <li>Cycling</li>

                    <li>Movies</li>

                    <li>Games</li>
                </div>
                <div className="right-side">
                    <div className="title">
                        <h1>Siarhei Povad</h1>
                        <span className="small">Java developer</span>
                    </div>

                    <h2 className="right-title">Profile</h2>
                    <p>Seeking a challenging job in an esteem organisation has the following technologies (Java SE, Java
                        EE,
                        Spring, Hibernate) where my technical skills and interpersonal skills can be demonstrated to the
                        success of the organisation and further developed.</p>
                    <a className="cv-link" href={Pdf} target="_blank">Download Resume</a>
                    <h2 className="right-title">Skills</h2>
                    <li>Java SE</li>
                    <li>OOP Principles</li>
                    <li>Data-structures and Algorithms</li>
                    <li>Java EE (Servlets - JSP - Web Services)</li>
                    <li>ORM (Hibernate - JPA)</li>
                    <li>SQL (SQL commands - JDBC - PostgreSQL)</li>
                    <li>Framework (Spring Core - Spring MVC)</li>
                    <li>Other (Maven, Tomcat, slf4j, Intellij IDEA, Git)</li>

                    <h2 className="right-title">Work Experiance</h2>
                    <div>
                        <div className="company">
                            <h5><strong>Java software developer</strong></h5>
                            <span className="work-range small">july 2021-Present</span>
                        </div>
                        <h3>Innowise</h3>
                        <li>Writing business logic</li>
                        <li>Working with DB</li>
                        <li>Writing integration tests</li>
                        <li>Backend development</li>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
