import { 
  SiGithub,
  SiGmail, 
  SiX,
} from '@icons-pack/react-simple-icons'; 
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const iconSize = 24; // Define a uniform size for all icons

  const links = [
    {
      icon: SiGmail,
      url: 'mailto:ashmitsingh862@gmail.com',
    },
    {
      icon: SiGithub,
      url: 'https://github.com/Ashmit111',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ashmit-singh-768456257/',
    }, 
    {
      icon: SiX,
      url: 'https://x.com/__ashmit____',
    },
  ]

  return (
    <div className="mr-auto mt-52 flex w-full flex-col items-center gap-8">
      <div className="flex flex-wrap items-center gap-10 text-gray-300 ">
        {links.map((link, key) => {
          const IconComponent = link.icon;  
          return (
            <a 
              href={link.url} 
              key={key}
              target="_blank" 
            >
              <IconComponent size={iconSize} className='hover:scale-110 transition-all ease-in-out hover:text-gray-400' />
            </a>
          )
        })}
      </div>
      <p className="text-sm text-gray-600 font-mono">
        © 2025 Ashmit. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
