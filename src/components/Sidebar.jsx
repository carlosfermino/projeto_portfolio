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
      <a href="https://docs.google.com/document/d/1L2Nz5_ckQ-_lddmpC3-TXlW6gXTDDRV5X6U92MPbSHA/" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
