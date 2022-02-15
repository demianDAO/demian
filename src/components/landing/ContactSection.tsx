import ContactCard from '@/components/landing/ContactCard';
import Form from '@/components/landing/Form';
import Title from '@/components/landing/Title';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';

export default function ContactSection() {
  return (
    <section className="pb-20 relative block">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="關於 demianDAO">由社區組建的 DAOs ETF，主要佈局 Dfinity Metaverse DAOs 的生態。</Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="join_full" icolor="green" title="參與條件">
            <Paragraph color="white">支付1000美元或等值ICP 即可入 DAOs</Paragraph>
          </ContactCard>
          <ContactCard icon="group_work" icolor="lightBlue" title="享有權益">
            <Paragraph color="white">ICP（Dfinity） 開發課程，從 0 到 1 實現 dApp</Paragraph>
            <Paragraph color="white">十年會員（2022-2032）</Paragraph>
            <Paragraph color="white">幣安資金費率</Paragraph>
          </ContactCard>
          <ContactCard icon="currency_bitcoin" icolor="teal" title="其他福利">
            <Paragraph color="white">空投 500,000 DMD</Paragraph>
            <Paragraph color="white">趨勢解讀和定期研究報告</Paragraph>
            <Paragraph color="white">提高認知和經濟學知識</Paragraph>
          </ContactCard>
          <ContactCard icon="warning" icolor="red" title="提示">
            <Paragraph color="white">加入後不予退還，加入後請遵守規則，做一個有素質的投資者。</Paragraph>
          </ContactCard>
        </div>

        <Form />
      </div>
    </section>
  );
}
