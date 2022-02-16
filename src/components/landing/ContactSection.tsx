import ContactCard from '@/components/landing/ContactCard';
import Form from '@/components/landing/Form';
import Title from '@/components/landing/Title';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="pb-20 relative block">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading={t('about.title')}> {t('about.desc')} </Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="join_full" icolor="green" title={t('about.join')}>
            <Paragraph color="white">{t('about.joinPayNotice')}</Paragraph>
          </ContactCard>
          <ContactCard icon="group_work" icolor="lightBlue" title={t('about.joinShare')}>
            <Paragraph color="white"> {t('about.joinShareDetail')}</Paragraph>
            <Paragraph color="white">{t('about.joinShareYear')} </Paragraph>
            <Paragraph color="white">{t('about.joinSharFee')} </Paragraph>
          </ContactCard>
          <ContactCard icon="currency_bitcoin" icolor="teal" title={t('about.joinSharOther')}>
            <Paragraph color="white">{t('about.joinSharAirdrop')}</Paragraph>
            <Paragraph color="white">{t('about.joinSharRead')} </Paragraph>
            <Paragraph color="white">{t('about.joinSharReadEco')} </Paragraph>
          </ContactCard>
          <ContactCard icon="warning" icolor="red" title={t('about.joinSharNotice')}>
            <Paragraph color="white">{t('about.joinSharNoticeRule')} </Paragraph>
          </ContactCard>
        </div>

        <Form />
      </div>
    </section>
  );
}
