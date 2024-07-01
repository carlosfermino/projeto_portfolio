import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", href: "https://www.linkedin.com/in/antonio-carlos-fermino-917495197/", icon: <FaLinkedinIn /> },
  { name: "github", href: "https://github.com/carlosfermino/", icon: <FaGithub /> },
  { name: "instagram", href: "https://www.instagram.com/carlos_together/?next=%2F", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
      <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>{network.icon}</a>  
    ))}
    </section>

    
  );
};


export default SocialNetworkContainer;
