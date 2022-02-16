import SimpleFooter from '@/components/DefaultFooter';
import AboutSection from '@/components/landing/AboutSection';
import React from 'react';
import Nav from '../../components/Layout/Nav';
const Home = () => {
  return (
    <>
      <div className="bg-primary bg-opacity-90 absolute w-full z-20">
        <Nav />
        <main>
          <AboutSection />
          <SimpleFooter />
        </main>
      </div>
    </>
  );
};

export default Home;
