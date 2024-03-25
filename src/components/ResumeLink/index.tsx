import { StyledResumeLink } from "./style";
import { resume } from "@/assets/files";

export default function ResumeLink() {
  return (
    <StyledResumeLink className="resume-link">
      <a href={resume} target="_blank">
        RESUME
      </a>
    </StyledResumeLink>
  );
}
