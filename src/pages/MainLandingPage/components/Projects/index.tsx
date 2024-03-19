import { Section } from "@/components";
import { content } from "@/utils";
import { githubIcon, openIcon } from "@/assets/icons";
import {
  StyledProjectCardInfo,
  StyledProjectCardWrapper,
  StyledProjectsList,
} from "./styles";

export default function Projects() {
  return (
    <Section title="SELECTED PROJECTS">
      <StyledProjectsList>
        {content.projects.map((project) => {
          return (
            <li key={project.githubUrl}>
              <StyledProjectCardWrapper
                href={project.pageUrl ? project.pageUrl : project.githubUrl}
                target="_blank"
              >
                <div className="project-card-image">
                  <img src={project.img} alt={`${project.title}`} />
                </div>

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
                      {project.mainTechs.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                  </footer>
                </StyledProjectCardInfo>
              </StyledProjectCardWrapper>
            </li>
          );
        })}
      </StyledProjectsList>
    </Section>
  );
}
