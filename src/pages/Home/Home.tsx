import SimpleFooter from '@/components/DefaultFooter';
// import DefaultNavbar from '@/components/DefaultNavbar';
import ContactSection from '@/components/landing/ContactSection';
import Header from '@/components/landing/Header';
import TeamSection from '@/components/landing/TeamSection';
import WorkingSection from '@/components/landing/WorkingSection';
import React from 'react';
import Nav from '../../components/Layout/Nav';
const Home = () => {
  return (
    <>
      <div className="bg-primary bg-opacity-90 absolute w-full z-20">
        <Nav />
        <main>
          <Header />
          <WorkingSection />
          <TeamSection />
          <ContactSection />
          <SimpleFooter />
        </main>
      </div>
    </>
  );
};

export default Home;
