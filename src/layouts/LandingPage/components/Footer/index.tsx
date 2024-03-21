import { Link } from "react-router-dom";
import { StyledFooter } from "./style";
import { greenHeartIcon } from "@/assets/icons";
import { content } from "@/utils";

export default function Footer() {
  return (
    <StyledFooter>
      <nav className="social-links">
        <ul>
          <li>
            <Link to={content.social.linkedin} target="_blank">
              LINKEDIN
            </Link>
          </li>
          <li>
            <Link to={content.social.github} target="_blank">
              GITHUB
            </Link>
          </li>
          <li>
            <Link to={`mailto:${content.social.email}`} target="_blank">
              EMAIL
            </Link>
          </li>
        </ul>
      </nav>
      <div className="credits">
        <p>
          Made with{" "}
          <img className="heart-icon" src={greenHeartIcon} alt="green heart" />{" "}
          by Victor Mendes
        </p>
      </div>
    </StyledFooter>
  );
}
