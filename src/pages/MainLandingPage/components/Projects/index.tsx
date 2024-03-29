import { AnimatedContainer, Section } from "@/components";
import { content } from "@/utils";
import { githubIcon, openIcon } from "@/assets/icons";
import {
  StyledProjectCardInfo,
  StyledProjectCardWrapper,
  StyledProjectsList,
} from "./styles";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Section
      title="SELECTED PROJECTS"
      id="projects"
      titleAnimation={{
        duration: 1,
        movementScale: "5%",
        direction: "down-up",
      }}
    >
      <StyledProjectsList>
        {content.projects.map((project, index) => {
          return (
            <li key={index.toString() + project.githubUrl}>
              <AnimatedContainer
                duration={0.5}
                direction="down-up"
                movementScale="5%"
                animationMode="linear"
              >
                <StyledProjectCardWrapper>
                  <Link
                    to={project.pageUrl ? project.pageUrl : project.githubUrl}
                    target="_blank"
                    className="project-card-image"
                  >
                    <img src={project.img} alt={`${project.title}`} />
                  </Link>

                  <StyledProjectCardInfo>
                    <header className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <nav className="project-links">
                        <a target="_blank" href={project.githubUrl}>
                          <img src={githubIcon} alt="github" />
                        </a>

                        {project.pageUrl && (
                          <a target="_blank" href={project.pageUrl}>
                            <img src={openIcon} alt="open" />
                          </a>
                        )}
                      </nav>
                    </header>

                    <p className="project-description">{project.description}</p>

                    <footer className="project-footer">
                      <ul>
                        {project.mainTechs.map((tech, index) => (
                          <li key={index.toString() + tech}>{tech}</li>
                        ))}
                      </ul>
                    </footer>
                  </StyledProjectCardInfo>
                </StyledProjectCardWrapper>
              </AnimatedContainer>
            </li>
          );
        })}
      </StyledProjectsList>
    </Section>
  );
}
