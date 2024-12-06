import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Antonio Carlos Fermino" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1PHj_tB1i0LCNlfLDWJT8NuQG6RMeupJv/view?usp=drive_link" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
