import React, { useEffect, useState } from "react";
import PrimaryColor from "../../../assets/icons/primary-color.svg"
import SecondaryColor from "../../../assets/icons/secondary-color.svg"
import WheelType from "../../../assets/icons/wheels.svg"
import BrakeColor from "../../../assets/icons/brakes.svg"
import LeatherColor from "../../../assets/icons/leather-color.svg"
import DownloadIcon from "../../../assets/icons/download.svg"
import { CarConfigs } from "../../configurator/interfaces";
import { carPrice } from "../../configurator/carConfigs";
import { AnimatePresence, motion } from "framer-motion";
import { downloadSummary } from "../generatePdf";
import { getPurchaseCode } from "../utils";

interface SummaryProps {
  handleUpdateEnvironment?: (data: boolean) => void,
  configs: CarConfigs,
  loaded?: boolean,
  checkout?: boolean
}

export const Summary = ({handleUpdateEnvironment, configs, loaded, checkout}: SummaryProps) => {
  const [internal, setInternal] = useState(false);
  const [modalSend, setModalSend] = useState(false);

  function updateInternal(data: boolean) {
    setInternal(data)
    if(handleUpdateEnvironment) handleUpdateEnvironment(data)
  }

  const getConfigsPrice = () => {
    return (
      configs.exteriorDesign.primaryColor.price +
      configs.exteriorDesign.secondaryColor.price +
      configs.exteriorDesign.wheelType.price +
      configs.exteriorDesign.brakesColor.price +
      configs.interiorDesign.leatherColor.price
    );
  };

  const getGradient = (value: string) => { // TODO remover essa funcao
    switch (value) {
      case '#ededed':
        return 'silverGradient'
      case '#000':
        return 'blackGradient'
      case '#1a6dd9':
        return 'blueGradient'
      case '#ff3838':
        return 'redGradient'
      case '#ffee05':
        return 'yellowGradient'
      case '#228067':
        return 'greenGradient'
      case 'carbon':
        return 'carbonGradient'
      case '#12ff4d':
        return 'limeGradient'
      case '#593915':
        return 'coffeeLeatherTexture'
      case '#c7b695':
        return 'lightLeatherTexture'
      case '#9c9a95':
        return 'greyLeatherTexture'
      case '#1a1a1a':
        return 'blackLeatherTexture'
      default:
        break;
    }
  }

  return (
    <>
    
    <div className={`flex flex-col bg-dark-primary items-center py-8 text-white w-80 ${checkout ? 'rounded-[10px] px-8 max-lg:w-full' : 'px-12 lg:max-2xl:h-[calc(100vh-72px)] lg:max-2xl:overflow-y-auto'}`}>
      {loaded &&
        <div className="flex items-center justify-center w-screen py-8 bg-dark-primary lg:hidden"> 
          <div className="flex flex-col cursor-pointer absolute">
            <motion.div className="rounded-full bg-yellow-primary w-3 opacity-0" animate={{y: [35,-5], opacity: [1,1,1,0], height: [12,18]}} transition={{duration: 0.5,repeat: Infinity, repeatDelay: 2, delay: 2, ease: 'circInOut'}}>
            </motion.div>
          </div>
        </div>
      }
      {!checkout && 
        (<div className="flex flex-col w-full max-lg:hidden">
          <strong className="font-inter font-semibold uppercase">view</strong>
          <div className={`flex font-inter uppercase font-medium text-xs mt-4 cursor-pointer ${!loaded && 'disabled-btn'}`}>
            <div className={`flex justify-center rounded-s-[10px] w-full border border-yellow-primary ${internal && 'bg-yellow-primary'} py-[6px] px-6`} onClick={() => updateInternal(true)}>garage</div>
            <div className={`flex justify-center rounded-e-[10px] w-full border border-yellow-primary ${!internal && 'bg-yellow-primary'} py-[6px] px-6`} onClick={() => updateInternal(false)}>road</div>
          </div>
        </div>)
      }
      <div className={`flex flex-col w-full bg-dark-primary pb-[6px] ${!checkout && 'mt-10'}`} id="print">
        <div className={`flex flex-col w-full`}>
          <strong className="font-inter font-semibold uppercase">summary</strong>
          <div className="flex flex-row mt-5">
            <div className="flex flex-col items-center py-1">
              <div className="h-3 w-3 bg-[#7d7d7d] rounded" />
              <div className="w-px bg-[#7d7d7d] h-[16.5rem] mt-4"></div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-inter text-sm ml-4">Exterior design</span>
              <div className="flex justify-between items-center my-8">
                <div className="flex flex-row items-center relative">
                  <div className={`icon-holder left-[-17px]`}>
                    <PrimaryColor />
                  </div>
                  <div className="flex flex-col pl-4">
                    <small className="font-space text-[10px]">Primary color</small>
                    <span className="text-yellow-primary font-space text-xs">$ {configs.exteriorDesign.primaryColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className={`w-4 h-8 ${getGradient(configs.exteriorDesign.primaryColor.value)}`}></div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-row items-center relative">
                  <div className={`icon-holder left-[-15px]`}>
                    <SecondaryColor />
                  </div>
                  <div className="flex flex-col pl-4">
                    <small className="font-space text-[10px]">Secondary color</small>
                    <span className="text-yellow-primary font-space text-xs">$ {configs.exteriorDesign.secondaryColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className={`w-4 h-8 ${getGradient(configs.exteriorDesign.secondaryColor.value)}`}></div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-row items-center relative">
                  <div className={`icon-holder left-[-16px]`}>
                    <WheelType />
                  </div>
                  <div className="flex flex-col pl-4">
                    <small className="font-space text-[10px]">Wheel type</small>
                    <span className="text-yellow-primary font-space text-xs">$ {configs.exteriorDesign.wheelType.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className="font-space text-[8px]">{configs.exteriorDesign.wheelType.value}</div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-row items-center relative">
                  <div className={`icon-holder left-[-16px]`}>
                    <BrakeColor />
                  </div>
                  <div className="flex flex-col pl-4">
                    <small className="font-space text-[10px]">Brake color</small>
                    <span className="text-yellow-primary font-space text-xs">$ {configs.exteriorDesign.brakesColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className={`w-4 h-8 ${getGradient(configs.exteriorDesign.brakesColor.value)}`}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-center py-1">
              <div className="h-3 w-3 bg-[#7d7d7d] rounded" />
              <div className="w-px bg-[#7d7d7d] h-10 mt-4"></div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-inter text-sm ml-4">Exterior design</span>
              <div className="flex justify-between items-center mt-8">
                <div className="flex flex-row items-center relative">
                  <div className={`icon-holder left-[-16px]`}>
                    <LeatherColor />
                  </div>
                  <div className="flex flex-col pl-4">
                    <small className="font-space text-[10px]">Leather color</small>
                    <span className="text-yellow-primary font-space text-xs">$ {configs.interiorDesign.leatherColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className={`w-4 h-8 ${getGradient(configs.interiorDesign.leatherColor.value)}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <strong className="font-inter font-semibold uppercase">total</strong>
          <div className="flex flex-col text-[#7D7D7D] font-space mt-1">
            <div className="flex justify-between">
              <small className="text-xs">Car</small><small className="text-xs">$ {carPrice.toLocaleString('en-us', { minimumFractionDigits: 2 })}</small>
            </div>
            <div className="flex justify-between">
              <small className="text-xs">Configurations</small>
              <small className="text-xs">$ {getConfigsPrice().toLocaleString('en-us', { minimumFractionDigits: 2 })}</small>
            </div>
            <span className="text-yellow-primary text-xl mt-1 text-end">$ {(getConfigsPrice() + carPrice).toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>
      {!checkout && <div className={`primary-btn mt-6 ${!loaded && 'disabled-btn'}`} onClick={() => setModalSend(true)}>Send to dealer</div>}
    </div>
    <AnimatePresence>
      {modalSend && <>
        <motion.div className="flex items-center justify-center bg-opacity-50 h-screen w-screen fixed left-0 top-0 bottom-0 z-40" 
          animate={{background: '#00000080'}} 
          initial={{background: '#00000000'}} 
          exit={{background: '#00000000'}}
        >
          <motion.div className="flex absolute flex-col justify-between z-50 bg-[#1C1C1C] rounded-[10px] p-4 overflow-hidden shadow-md" 
            animate={{height: `${window.innerWidth > 768 ? '220px' : '240px'}`, width: `${window.innerWidth > 768 ? '375px' : '290px'}`, opacity: 1}} 
            initial={{height: 0, width: 0, opacity: 0}} 
            exit={{height: 0, width: 0, opacity: 0}} 
            transition={{type: "spring",stiffness: 250,damping: 24}}
          >
            <h3 className="text-white font-inter text-lg">Summary sent to dealer successfully!</h3>
            <p className="font-montserrat text-[#7E7E7E] text-sm">
              Downlaod the PDF to get your configurations detailed.<br/>
              Purchase code: <br/>
              <span className="text-yellow-primary">
                {getPurchaseCode(configs)}
              </span>
            </p>
            <div className="flex items-center justify-between">
              <span className="py-3 px-8 text-white font-inter text-sm cursor-pointer" onClick={() => setModalSend(false)}>Close</span>
              <div className="primary-btn" onClick={() => {downloadSummary(configs); setModalSend(false)}}>
                PDF
                <div className="ml-3">
                  <DownloadIcon />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </>}
    </AnimatePresence>
    </>
  );
};

