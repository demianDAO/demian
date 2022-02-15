import H6 from '@material-tailwind/react/Heading6';
import Icon from '@material-tailwind/react/Icon';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ContactCard({ icon, icolor, title, children }) {
  return (
    <div className="w-full lg:w-3/12 px-4 text-left">
      <div className="p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
        <Icon name={icon} color={icolor} size="xl" />
      </div>
      <H6 color="white">{title}</H6>
      <div color="white">{children}</div>
    </div>
  );
}
