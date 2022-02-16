import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../Hook/Store/Store';
import i18n from '../../lib/react-i18next-config';
import IdentifierLabelWithButtons from '../Buttons/IdentifierLabelWithButtons';
import LoginButton from '../Buttons/LoginButton';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
];

export default function Nav() {
  const {
    state: { principal },
  } = useGlobalContext();

  const [language, setLanguage] = useState('zh-HK');

  const changeLanguage = e => {
    console.log(e, 78787);

    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const type = localStorage.getItem('i18nextLng');
    if (type) {
      setLanguage(type);
    }
  }, []);

  return (
    <div className="mt-5">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="space-x-8 flex ml-5">
            {navigation.map(item => (
              <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232">
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              value={language}
              onChange={e => changeLanguage(e)}>
              <option value="zh-HK">HK</option>
              <option value="en-US">EN</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            {principal && !principal.isAnonymous() && (
              <div className="flex flex-col">
                <IdentifierLabelWithButtons className="text-white" type="Principal" id={principal} isShort={true} />
              </div>
            )}
            <LoginButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
