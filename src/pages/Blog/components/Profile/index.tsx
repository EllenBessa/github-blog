import { FaGithub, FaBuilding, FaUsers } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { ProfileCard, ProfileCardContent } from "./styles";

export function Profile() {
  return (
    <ProfileCard>
      <img src="https://github.com/EllenBessa.png" alt="" />

      <ProfileCardContent>
        <header>
          <h1>Ellen Bessa</h1>

          <a
            href="https://github.com/EllenBessa"
            target="_blank"
            rel="noreferrer"
          >
            github
            <span>
              <FaArrowUpRightFromSquare />
            </span>
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <div>
            <FaGithub size={18} />
            <span>ellenbessa</span>
          </div>

          <div>
            <FaBuilding size={18} />
            <span>Rocktseat</span>
          </div>

          <div>
            <FaUsers size={18} />
            <span>6 seguidores</span>
          </div>
        </footer>
      </ProfileCardContent>
    </ProfileCard>
  );
}
