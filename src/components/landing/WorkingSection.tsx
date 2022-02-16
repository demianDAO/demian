import StatusCard from '@/components/landing/StatusCard';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardImage from '@material-tailwind/react/CardImage';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Teamwork from '../../static/assets/web3.jpg';

export default function WorkingSection() {
  const { t } = useTranslation();

  return (
    <section className="pt-20 pb-10 bg-gray-100">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          {' '}
          {t('home.sectionCourse')}
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-base">{t('home.sectionCourseDetail')} </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="all_inclusive" title={t('home.sectionCardBasic')}>
            {t('home.sectionCardDetail')}
          </StatusCard>
          <StatusCard color="lightBlue" icon="code" title={t('home.sectionCardTitle')}>
            {t('home.sectionCardBasicDetail')}
          </StatusCard>
          <StatusCard color="teal" icon="school" title={t('home.sectionCardDeploy')}>
            {t('home.sectionCardDeployDetail')}
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray"> {t('home.sectionCardDeploy')}</H4>
            <LeadText color="blueGray">{t('home.sectionCardHowtoDetail')}</LeadText>
            <LeadText color="blueGray">{t('home.sectionCardHowtoDesc')} </LeadText>
            <a href="#pablo" className="font-medium text-light-blue-500 mt-2 inline-block">
              Read More
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray"> {t('home.sectionCardHowValue')}</H6>
                <Paragraph color="blueGray">{t('home.sectionCardHowShare')}</Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
