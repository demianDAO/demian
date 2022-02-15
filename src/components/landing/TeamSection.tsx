import Title from '@/components/landing/Title';
import React from 'react';
import Image1 from '../../static/assets/team/kkdemian.png';
import Image4 from '../../static/assets/team/lm.png';
import Image2 from '../../static/assets/team/milo.png';
import Image3 from '../../static/assets/team/mo.jpeg';
import TeamCard from './TeamCard';

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Our DAOs">From around the Globe.</Title>
        <div className="flex flex-wrap ">
          <TeamCard img={Image1} name="kkdemian" position="引領者" />

          <TeamCard img={Image3} name="Jack" position="Rust/Motoko 工程師" />

          <TeamCard img={Image2} name="Milo763" position="Motoko 工程師" />

          <TeamCard img={Image4} name="Lionel Messi" position="IC Hodler & 顧問" />
        </div>
      </div>
    </section>
  );
}
