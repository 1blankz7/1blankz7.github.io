import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faXing, faGithub } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';

const year = dayjs().format('YYYY');

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-center sm:text-left">
    <div className="max-w-5xl mx-auto pb-10 pt-10 text-gray-900">
      <ul>
        <li className="inline-block block font-semibold px-3"><Link href="/">Home</Link></li>
        <li className="inline-block block font-semibold px-3"><Link href="/about">About</Link></li>
        <li className="inline-block block font-semibold px-3"><Link href="/imprint">Imprint</Link></li>
        <li className="inline-block block font-semibold px-3"><Link href="/privacy-policy">Privacy Policy</Link></li>
      </ul>
      <div className="sm:flex px-3">
        <div className="w-full sm:w-1/2">
          <h4 className="font-bold text-2xl pt-10">Christian Blank</h4>
          <span className="block pt-1 text-xs tracking-wider font-light">&copy; {year}. All rights reserved.</span>
        </div>
        <div className="w-full sm:w-1/2 text-center md:text-right mt-10 sm:mt-0">
          <a href="https://twitter.com/_cblank" title="Twitter" className="inline-block w-6 mr-2">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/christian-blank-55b669195/" title="Linkedin" className="inline-block w-6 mr-2">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.xing.com/profile/Christian_Blank28/cv" title="Xing" className="inline-block w-6 mr-2">
            <FontAwesomeIcon icon={faXing} />
          </a>
          <a href="https://github.com/1blankz7" title="Github" className="inline-block w-6 mr-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
