import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DefaultFooter() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">{t('about.title')}</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">{t('home.content')}</LeadText>
              </div>
              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                <a
                  href="https://www.twitter.com/demiandao"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
                <a
                  href="https://github.com/demiandao"
                  className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon family="font-awesome" name="fab fa-github" />
                </a>
                <a
                  href="https://t.me/demiandao"
                  className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon family="font-awesome" name="fab fa-telegram" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-2 ml-auto md:mb-0 mb-8">
                  <span className="block uppercase text-gray-900 font-mono text-2xl font-medium mb-2">
                    {t('footer.links')}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/about"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                        {t('about.aboutUs')}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                        target="_blank"
                        href="https://demiandao.substack.com"
                        rel="noreferrer">
                        {t('footer.newsletter')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} demianDAO.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
