import Title from '@/components/landing/Title';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="pb-20 relative block">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="關於 demianDAO">由社區組建的 DAOs ETF，主要佈局 Dfinity Metaverse DAOs 的生態。</Title>

        <div className="text-left mb-20">
          <H3 color="white">DMD Index</H3>
          {''}
          <LeadText color="white">DMD 是一個 ETF DAOs 基金產品。 DMD 是 dfinity Metaverse DAOs 的縮寫，</LeadText>
          <LeadText color="white">而 DMD 又是 demianDAO 的縮寫，所以我們專注在 IC、元宇宙、DAO 的投資之上，</LeadText>
          <LeadText color="white">
            最早的 DMD index 由 BTC、IC、SAND、BANK、RSS3 等 Token 組成，未來可能會增加更多成分組成。
          </LeadText>
        </div>
      </div>
    </section>
  );
}
