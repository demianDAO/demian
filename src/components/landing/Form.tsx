import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Form() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="white">{t('about.doYouWant')} </H3>
              <Paragraph color="white">{t('about.doKnow')} </Paragraph>
              <Paragraph color="white">{t('about.joinInvestKnow')} </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
