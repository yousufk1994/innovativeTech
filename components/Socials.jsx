import { useState } from 'react';
import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiMenuLine,
} from 'react-icons/ri';

export const socialData = [
  {
    name: 'YouTube',
    link: 'https://youtube.com',
    Icon: RiYoutubeLine,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
    Icon: RiInstagramLine,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    Icon: RiFacebookLine,
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com',
    Icon: RiDribbbleLine,
  },
  {
    name: 'Pinterest',
    link: 'https://pinterest.com',
    Icon: RiPinterestLine,
  },
  {
    name: 'Github',
    link: 'https://github.com/sanidhyy/modern-portfolio',
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button
        className="sm:hidden fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RiMenuLine className="w-6 h-6" />
      </button>

      {/* Social Links Container */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } fixed top-10 right-1 p-4 rounded-md shadow-lg xs:flex xs:items-center xs:gap-x-5 xs:text-lg xs:relative xs:bg-transparent xs:shadow-none sm:flex sm:items-center sm:gap-x-5 sm:text-lg sm:bg-transparent sm:shadow-none`}
      >
        {socialData.map((social, i) => (
          <Link
            key={i}
            title={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${
              social.name === 'Github'
                ? 'bg-accent rounded-full p-[5px] hover:text-white'
                : 'hover:text-accent'
            } transition-all duration-300 flex items-center gap-2`}
          >
            <social.Icon aria-hidden />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
