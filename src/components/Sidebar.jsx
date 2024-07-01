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
      <a href="https://drive.google.com/file/d/1RlW2YH5TXv5f2OFYBha-MyHMrG6HflMg/view" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
