import socials from '../../../config/socials';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../../components/layout/Card';

export default function Contact() {
  return (
    <Card className="relative flex h-full flex-col items-center justify-center bg-[#1DB954] dark:bg-[#1DB954]">
      <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
        <a
          className='cancel-drag group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 px-4 py-2 outline-none ring-2 ring-gray-200/45 transition-all duration-300 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30'
          href='mailto:dominik@glaetzle.io'>
          <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
          Let's talk!
        </a>
        <div className='inline-flex gap-6'>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className='cancel-drag'
              aria-label={`My ${social.name}`}
              target='_blank'
              rel='noreferrer'>
              {<social.icon size='1.3rem' />}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}