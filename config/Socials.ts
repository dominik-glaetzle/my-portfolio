import { IconType } from 'react-icons';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';

export interface Social {
  name: string;
  url: string;
  icon: IconType;
}

const socials: Social[] = [
  {
    name: 'Github',
    url: 'https://github.com/dominik-glaetzle',
    icon: FaGithub,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/dominikglaetzle',
    icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dominik-glätzle-2487b62b5/',
    icon: FaLinkedin,
  },
];

export default socials;
