import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImgOk from "../assets/img/Project1.png";
import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Click To View ",
      description: "Project 1",
      imgUrl: projImgOk,
      link:"https://www.facebook.com/pxynnhipxynnhi"
    },
    {
      title: "Click To View",
      description: "Project 2",
      imgUrl: projImg2,
      link:"https://www.facebook.com/pxynnhipxynnhi"
    }
  ];
  const projects_3 = [
    {
      title: "Click To View ",
      description: "Project 1",
      imgUrl: projImg1,
      link:"https://www.facebook.com/pxynnhipxynnhi"
    },
    {
      title: "Click To View",
      description: "Project 2",
      imgUrl: projImg2,
      link:"https://www.facebook.com/pxynnhipxynnhi"
    },
    {
      title: "Click To View",
      description: "Project 2",
      imgUrl: projImg2,
      link:"https://www.facebook.com/pxynnhipxynnhi"
    }
  ];
  const customRowStyle = {
    justifyContent: "center", 
  };
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Critical Incident</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Reflections</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Phan Xuân Yến Nhi</p>
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row style={customRowStyle}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row style={customRowStyle}>
                        {
                          projects_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
