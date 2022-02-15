import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';

export default function Form() {
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="white">What do you need?</H3>
              <Paragraph color="white">Write code, Keep learn.</Paragraph>
              <Paragraph color="white">加入我們一起思考下一個十年的投資邏輯，不斷提升認知。</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
