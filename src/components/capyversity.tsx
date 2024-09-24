import Link from 'next/link';
import styles from './capyversity.module.css';
import Image from 'next/image';
import capyversity from '../../public/capyversity.png'
import { FC } from 'react';
const Capyversity: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          {/* <Link href="/">Search</Link> */}
        </li>
        <li>
          <Image src={capyversity} alt="Capyversity logo" width={100} height={100} />
        </li>
        <li>
          <Link
            
          href='/'
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
          >
          Login
          {/* <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
        </Link>
      </li>
    </ul>
      </nav >
    );
  };

export default Capyversity;



