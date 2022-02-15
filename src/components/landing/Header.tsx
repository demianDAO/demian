import { HttpAgent } from '@dfinity/agent';
import { AccountIdentifier, ICP, LedgerCanister } from '@dfinity/nns';
import Button from '@material-tailwind/react/Button';
import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Modal from '@material-tailwind/react/Modal';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import fetch from 'cross-fetch';
import { StoicIdentity } from 'ic-stoic-identity';
import React, { useEffect, useState } from 'react';
import { message } from 'react-message-popup';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGlobalContext, useSetAgent } from '../../Hook/Store/Store';
import { HOST } from '../../lib/canisters';

global.fetch = fetch;

export default function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const [showPrice, setPrice] = React.useState(0);
  const [curNumber, setcurPrice] = React.useState(null);
  const [ibalance, setBalance] = React.useState(null);

  const [loading, setLoading] = useState(false);

  const {
    state: { isAuthed },
  } = useGlobalContext();

  const setAgent = useSetAgent();

  const [payStatus, setPayStatus] = React.useState('立即支付');

  const PLUG_ARGS = {
    whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'],
    host: HOST,
  };

  console.log(isAuthed, 89898998);
  console.log(setAgent, 744444);

  // Price
  const fetchPrice = async () => {
    const data = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=internet-computer'
    ).then(rsp => rsp.json());
    setPrice(data[0]['current_price']);
    // num
    const allPrice = 1000;
    const curPrice = (Math.floor((allPrice / data[0]['current_price']) * 10000) / 10000).toFixed(5);
    setcurPrice(curPrice);

    console.log(data[0]['current_price'], 8888);
  };

  const getBalance = async () => {
    const ledger = LedgerCanister.create();

    const accountIdentifier = AccountIdentifier.fromHex(
      'efa01544f509c56dd85449edf2381244a48fad1ede5183836229c00ab00d52df'
    );

    const balance = await ledger.accountBalance({ accountIdentifier });

    console.log(balance.toE8s(), 787887);

    const icp = Number(balance.toE8s()) / 100000000;
    setBalance(icp);
    console.log(`Balance: ${icp}`);
  };

  const confirmPay = async money => {
    console.log(money);

    if (!isAuthed) {
      message.error('请登录后操作', 3000);
      setShowModal(false);
      return false;
    }

    if (ibalance < money) {
      message.error('余额不足，请购买 ICP 后支付', 3000);
      setShowModal(false);
      return false;
    }
    setLoading(!loading);

    (async () => {
      const l = localStorage.getItem('loginType');

      if (l) {
        switch (l) {
          case 'II':
            // eslint-disable-next-line no-case-declarations
            message.warn('II不支持支付，请更换登录方式进行支付', 3000);
            break;
          case 'stoic':
            // stoic
            setPayStatus('支付中.....');
            StoicIdentity.load().then(async identity => {
              console.log(identity, 78787878);

              if (identity !== false) {
                //ID is a already connected wallet!
                // identity
                const ledger = LedgerCanister.create({ agent: new HttpAgent({ identity }) });

                const res = await ledger.transfer({
                  to: AccountIdentifier.fromHex('8a69d6fde456748625f4b19c711bf1826b566d78500aa9d3344e014862c0ee6f'),
                  amount: ICP.fromE8s(BigInt(10000)),
                });
                setLoading(true);
                setShowModal(false);
                message.success('支付成功，请联系管理入群！', 3000);
                console.log(res, 'debug transfer');
              }
            });
            break;
          case 'plug':
            // is plug
            if (!window.ic.plug.agent) {
              await window.ic.plug.createAgent(PLUG_ARGS);
            } else {
              setPayStatus('支付中.....');
              const ledger = LedgerCanister.create({ agent: window.ic.plug.agent });

              const res = await ledger.transfer({
                to: AccountIdentifier.fromHex('8a69d6fde456748625f4b19c711bf1826b566d78500aa9d3344e014862c0ee6f'),
                amount: ICP.fromE8s(BigInt(10000)),
              });
              console.log(res, 'debug transfer');

              if (Number(res) > 0) {
                setLoading(true);
                setShowModal(false);
                message.success('支付成功，请联系管理入群！', 3000);
              }
            }

            break;
        }
      }
    })();

    // window.ic.plug.agent
    console.log('debug pay', 999);

    // pay now
  };

  useEffect(() => {
    fetchPrice();
    getBalance();
  }, []);

  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">demianDAO (🏴‍☠️,🏴‍☠️).</H2>

            <div className="text-gray-200">
              <LeadText color="gray-200">在DAOs中分享觀點與見聞，並更深度地參與內容分享。</LeadText>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            onClick={e => setShowModal(true)}
            iconOnly={false}
            ripple="light">
            加入DAOs
          </Button>

          <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
            <ModalHeader toggler={() => setShowModal(false)}>Join demianDAO</ModalHeader>
            <ModalBody>
              <p className="text-base leading-relaxed text-gray-600 font-normal mb-3">
                支付1000美元或等值ICP 即可入 DAOs,目前接受ICP支付。
              </p>
              <p className="text-base leading-relaxed text-green-700 font-normal mb-3">当前ICP价格：{showPrice}</p>
              <p className="text-base leading-relaxed text-green-600 font-normal mb-3">应支付ICP数量：{curNumber}</p>
              <p className="text-base leading-relaxed text-green-600 font-normal">当前账户余额：{ibalance}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="red" buttonType="link" onClick={e => setShowModal(false)} ripple="dark">
                取消
              </Button>

              <Button color="green" onClick={e => confirmPay(curNumber)} ripple="light">
                {payStatus}
                <ClipLoader color={'#ffffff'} loading={loading} size={25} />
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
