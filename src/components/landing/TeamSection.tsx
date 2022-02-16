import Title from '@/components/landing/Title';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image1 from '../../static/assets/team/kkdemian.png';
import Image4 from '../../static/assets/team/lm.png';
import Image2 from '../../static/assets/team/milo.png';
import Image3 from '../../static/assets/team/mo.jpeg';
import TeamCard from './TeamCard';

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading={t('home.sectionOurDaos')}>{t('home.sectionFrom')}</Title>
        <div className="flex flex-wrap ">
          <TeamCard img={Image1} name="kkdemian" position={t('home.sectionPosition')} />

          <TeamCard img={Image3} name="Jack" position={t('home.sectionJackPosition')} />

          <TeamCard img={Image2} name="Milo763" position={t('home.sectionMiloPosition')} />

          <TeamCard img={Image4} name="Lionel Messi" position={t('home.sectionLMPosition')} />
        </div>
      </div>
    </section>
  );
}
