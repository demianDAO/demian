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
// the hook
import { useTranslation } from 'react-i18next';
import { message } from 'react-message-popup';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGlobalContext } from '../../Hook/Store/Store';
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

  const { t } = useTranslation();

  const [payStatus, setPayStatus] = React.useState(t('public.payNow'));
  const PLUG_ARGS = {
    whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'],
    host: HOST,
  };

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
  };

  // balance
  const getBalance = async () => {
    const ledger = LedgerCanister.create();

    const accountIdentifier = AccountIdentifier.fromHex(
      'efa01544f509c56dd85449edf2381244a48fad1ede5183836229c00ab00d52df'
    );

    const balance = await ledger.accountBalance({ accountIdentifier });

    const icp = Number(balance.toE8s()) / 100000000;
    setBalance(icp);
    // console.log(`Balance: ${icp}`);
  };

  const confirmPay = async money => {
    console.log(money);

    if (!isAuthed) {
      message.error(t('public.notLogin'), 3000);
      setShowModal(false);
      return false;
    }

    if (ibalance < money) {
      message.error(t('public.payNotBalance'), 3000);
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
            message.warn(t('public.payWarn'), 3000);
            break;
          case 'stoic':
            // stoic
            setPayStatus(t('public.payProcess'));
            StoicIdentity.load().then(async identity => {
              if (identity !== false) {
                //ID is a already connected wallet!
                // identity
                const ledger = LedgerCanister.create({ agent: new HttpAgent({ identity }) });

                const res = await ledger.transfer({
                  to: AccountIdentifier.fromHex('25e56160d21a451b2db18525f99df9c85a57cbf96386c0922aed47801e697884'),
                  amount: ICP.fromE8s(BigInt(10000)),
                });

                if (Number(res) > 0) {
                  setLoading(true);
                  setShowModal(false);
                  message.success(t('public.paySuccess'), 3000);
                } else {
                  message.error(t('public.payFail'), 3000);
                }
              }
            });
            break;
          case 'plug':
            // is plug
            if (!window.ic.plug.agent) {
              await window.ic.plug.createAgent(PLUG_ARGS);
            } else {
              setPayStatus(t('public.payProcess'));
              const ledger = LedgerCanister.create({ agent: window.ic.plug.agent });

              const res = await ledger.transfer({
                to: AccountIdentifier.fromHex('25e56160d21a451b2db18525f99df9c85a57cbf96386c0922aed47801e697884'),
                amount: ICP.fromE8s(BigInt(10000)),
              });

              if (Number(res) > 0) {
                setLoading(true);
                setShowModal(false);
                message.success(t('public.paySuccess'), 3000);
              } else {
                message.error(t('public.payFail'), 3000);
              }
            }

            break;
        }
      }
    })();
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
            <H2 color="white">{t('home.title')}</H2>

            <div className="text-gray-200">
              <LeadText color="gray-200"> {t('home.content')} </LeadText>
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
            {t('home.join')}
          </Button>

          <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
            <ModalHeader toggler={() => setShowModal(false)}>{t('home.joinModal')}</ModalHeader>
            <ModalBody>
              <p className="text-base leading-relaxed text-gray-600 font-normal mb-3">{t('home.joinPayNotice')}</p>
              <p className="text-base leading-relaxed text-green-700 font-normal mb-3">
                {' '}
                {t('home.joinIcpPrice')} {showPrice}
              </p>
              <p className="text-base leading-relaxed text-green-600 font-normal mb-3">
                {t('home.joinIcpNumber')} {curNumber}
              </p>
              <p className="text-base leading-relaxed text-green-600 font-normal">
                {t('public.accountBalance')} {ibalance}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="red" buttonType="link" onClick={e => setShowModal(false)} ripple="dark">
                {t('public.cancel')}
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
