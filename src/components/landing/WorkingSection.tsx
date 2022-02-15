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
import Teamwork from '../../static/assets/teamwork.jpeg';

export default function WorkingSection() {
  return (
    <section className="pt-20 pb-10 bg-gray-100">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          {' '}
          開發課程
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-base">從0到1實現Dfinity(ICP)上的dApp。</p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="all_inclusive" title="Dfinity基礎">
            通過簡單的幾節課，掌握dfinity的運行和經濟模型。
          </StatusCard>
          <StatusCard color="lightBlue" icon="code" title="開發基礎">
            學習簡單的dfx命令和本地操作。
          </StatusCard>
          <StatusCard color="teal" icon="school" title="接口實現和部署">
            通過學習Motoko實現簡單的接口，運用實戰項目實現dApp，並部署到IC主網。
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">demianDAO如何運行</H4>
            <LeadText color="blueGray">
              通過項目實踐和不斷學習提高自我，並科普和佈道Web3 時代最重要的底層設施ICP。
            </LeadText>
            <LeadText color="blueGray">加入到不同的項目並研究趨勢，結合經濟學、社會學等學科提高自我認知。</LeadText>
            <a href="#pablo" className="font-medium text-light-blue-500 mt-2 inline-block">
              Read More
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">一個有著共同價值觀的DAOs</H6>
                <Paragraph color="blueGray">
                  在DAOs中分享觀點與見聞，並更深度地參與內容分享。我們自身不是DAO，做的事才是DAOs。
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
