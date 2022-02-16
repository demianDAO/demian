import Title from '@/components/landing/Title';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="pb-20 relative block">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading={t('about.title')}>{t('about.aboutDmd')} </Title>

        <div className="justify-left text-center mb-20">
          <H3 color="white"> {t('about.aboutDmdindex')} </H3>
          {''}
          <LeadText color="white">{t('about.aboutDmdEtf')} </LeadText>
          <LeadText color="white"> {t('about.aboutDmdDAO')} </LeadText>
          <LeadText color="white">{t('about.aboutDmdindexComp')}</LeadText>
        </div>
      </div>
    </section>
  );
}
