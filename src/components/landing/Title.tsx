import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import React from 'react';

export default function Title({ heading, children }) {
  return (
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-2">
        <H3 color="white">{heading}</H3>
        <LeadText color="white">{children}</LeadText>
      </div>
    </div>
  );
}
