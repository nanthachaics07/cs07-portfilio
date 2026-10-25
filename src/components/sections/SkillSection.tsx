/** Skills — tech stack icons and learning topics. */
import { SECTION_IDS } from '../../constants/sectionIds';
import { asset } from '../../lib/asset';
import PageSection from './PageSection';
import './SkillSection.css';

export default function SkillSection() {
  return (
    <PageSection id={SECTION_IDS.skill}>
{/* SKILL TOPIC */}
          <div className="my--skills">
            <div className="container">
              <div className="top--title">skill</div>
              <h2 className="title">Technical <span>Skills</span></h2>
              {/* <div id="topic-skill1" style="font-size: 1.2rem;">
            <p>▸ Artificial Intelligence & Regression Tools:</p>
          </div> */}
              {/* <div class="skills">

            <div>
              <div class="skill">
                  <div class="skill--img--cover">
                      <img src={asset('images/python_1.png')} alt="img">
                  </div>

              </div>
              <p>Python</p>
            </div> 

            <div>
              <div class="skill">
                  <div class="skill--img--cover">
                      <img src={asset('images/google colab.png')} alt="img">
                  </div>

              </div>
              <p>Google Colab</p>
            </div> 

          </div> */}
              <div className="topic-skill2"><p>▸ Programming Language:</p></div>
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/Go-Logo_Blue.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Golang</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/cpp.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>C++</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/JavaScript-logo1.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>JavaScript</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/TS.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>TypeScript</p>
                </div>
              </div>
              <div className="topic-skill2"><p>▸ APIs &amp; API Frameworks:</p></div> 
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/GoFiber.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Fiber</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/gRPC logo.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>gRPC</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/nodejs.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>NodeJS</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/express.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Express</p>
                </div>
              </div>
              <div className="topic-skill2"><p>▸ Database SQL/ORM:</p></div> 
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/mongoDB.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>MongoDB</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/scylla.webp')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>ScyllaDB</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/PgSQL.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>PostgreSQL</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/MsSqlServer.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>MS SQLServer</p>
                </div>
              </div>
              <div className="topic-skill2"><p>▸ Web Debug &amp; API Test Tool:</p></div> 
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/chromeDEVtools.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Chrome Developer Tools</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/posman.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Postman</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/insominia.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Insomnia</p>
                </div>
              </div>
              <div className="topic-skill2"><p>▸ Version Control &amp; Code review:</p></div> 
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/git.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Git</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/github.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Github</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/fork.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Fork</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/sourced tree.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Sources Tree</p>
                </div>
              </div>
              <div className="topic-skill2"><p>▸ ENV and Deployment:</p></div> 
              <div className="skills">
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/docker.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Docker</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/minikube.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Minikube</p>
                </div>
                <div>
                  <div className="skill">
                    <div className="skill--img--cover">
                      <img src={asset('images/gitlab.png')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <p>Gitlab</p>
                </div>
              </div>
              {/* during study */}
              <div className="topic-skill2">
                <p style={{color: '#ECDE35', fontWeight: 'bold', fontSize: '1.5rem'}}>
                  During Learning <span>&amp;</span>  Practice:
                </p>
              </div>  
              <div className="experience">
                <h3>Python 3</h3>
                <p className="school">Solve Problem</p>
                <div className="circle" />
              </div>
              <div>
                <div className="experience">
                  <h3>Kubernetes</h3>
                  <p className="school">Scale up Cluster</p>
                  <div className="circle" />
                </div>
                <div className="experience">
                  <h3>Jenkins</h3>
                  <p className="school">Continuous Integration</p>
                  <div className="circle" />
                </div>
                <div className="experience">
                  <h3>C# (.NET)</h3>
                  <p className="school">Web Framework</p>
                  <div className="circle" />
                </div>
                <div className="experience">
                  <h3>Cyber security</h3>
                  <p className="school">Penetration Testing</p>
                  <div className="circle" />
                </div>
              </div>
            </div>    
          </div>
    </PageSection>
  );
}
