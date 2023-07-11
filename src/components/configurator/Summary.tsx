import React, { useEffect, useState } from "react";
import PrimaryColor from "../../assets/icons/primary-color.svg"
import SecondaryColor from "../../assets/icons/secondary-color.svg"
import WheelType from "../../assets/icons/wheels.svg"
import BrakeColor from "../../assets/icons/brakes.svg"
import LeatherColor from "../../assets/icons/leather-color.svg"
import { CarConfigs } from "./interfaces";
import { carPrice } from "./carConfigs";
import Logo from "../../assets/porscha-logo-white.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface SummaryProps {
  handleUpdateEnviroment: any,
  configs: CarConfigs,
  progress: number
}

export const Summary = ({handleUpdateEnviroment, configs, progress}: SummaryProps) => {
  const [internal, setInternal] = useState(false);

  function updateInternal(data: boolean) {
    setInternal(data)
    handleUpdateEnviroment(data)
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

  const getGradient = (value: string) => {
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
        return 'coffeeLeatherGradient'
      case '#c7b695':
        return 'lightLeatherGradient'
      case '#9c9a95':
        return 'greyLeatherGradient'
      case '#1a1a1a':
        return 'blackLeatherGradient'
      default:
        break;
    }
  }

  const saveConfigs = () => {
    const input: any = document.getElementById('print');
    html2canvas(input)
      .then((canvas) => {
        const croppedCanvas = document.createElement('canvas');
        const croppedContext = croppedCanvas.getContext('2d');

        const sourceWidth = canvas.width;
        const sourceHeight = canvas.height;

        const croppedWidth = sourceWidth - 2;
        const croppedHeight = sourceHeight - 250;

        croppedCanvas.width = croppedWidth;
        croppedCanvas.height = croppedHeight;

        croppedContext?.drawImage(
          canvas,
          0,
          150,
          croppedWidth,
          croppedHeight,
          0,
          0,
          croppedWidth,
          croppedHeight
        );

        const imgData: any = croppedCanvas.toDataURL('image/png');
        const pdf = new jsPDF({unit: 'px', format: [180,490]});
        pdf.setFillColor('#1c1c1c');
        pdf.rect(0, 0, 10000, 10000, "F");
        pdf.addImage(Logo, 60, 20, 60, 0);
        pdf.setTextColor('#fff');
        pdf.setFont('Inter-Bold', 'bold');
        pdf.setFontSize(12)
        pdf.text('911 GT2', 73, 70);
        pdf.setFontSize(10);
        pdf.text('PURCHASE CODE', 60, 450)
        pdf.addImage(imgData, 0, 80, 0, 0);
        pdf.setTextColor('#E2B558')
        pdf.setFontSize(10);
        pdf.text(`pc=${configs.exteriorDesign.primaryColor.code}&sc=${configs.exteriorDesign.secondaryColor.code}&wt=${configs.exteriorDesign.wheelType.code}&bc=${configs.exteriorDesign.brakesColor.code}&lc=${configs.interiorDesign.leatherColor.code}`,
         35, 460)
        pdf.save(`911-gt2-${new Date().toDateString().replaceAll(' ', '-')}.pdf`);
      })
    ;
  }

  return (
    <div className="flex flex-col w-80 bg-[#1C1C1C] items-center py-8 text-white" id="print">
      <div className="flex flex-col w-[214px]">
        <strong className="font-inter font-semibold uppercase">view</strong>
        <div className={`flex font-inter uppercase font-medium text-xs mt-4 cursor-pointer ${progress !== 100 && 'disabled-btn'}`}>
          <div className={`flex justify-center rounded-s-[10px] w-full border border-[#E2B558] ${internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(true)}>garage</div>
          <div className={`flex justify-center rounded-e-[10px] w-full border border-[#E2B558] ${!internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(false)}>road</div>
        </div>
      </div>
      <div className="flex flex-col w-[214px] mt-14">
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
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-17px]">
                  <PrimaryColor />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Primary color</small>
                  <span className="text-[#E2B558] font-space text-xs">$ {configs.exteriorDesign.primaryColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className={`w-4 h-8 ${getGradient(configs.exteriorDesign.primaryColor.value)}`}></div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-row items-center relative">
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-15px]">
                  <SecondaryColor />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Secondary color</small>
                  <span className="text-[#E2B558] font-space text-xs">$ {configs.exteriorDesign.secondaryColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className={`w-4 h-8 ${getGradient(configs.exteriorDesign.secondaryColor.value)}`}></div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-row items-center relative">
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-16px]">
                  <WheelType />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Wheel type</small>
                  <span className="text-[#E2B558] font-space text-xs">$ {configs.exteriorDesign.wheelType.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="font-space text-[8px]">{configs.exteriorDesign.wheelType.value}</div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-row items-center relative">
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-16px]">
                  <BrakeColor />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Brake color</small>
                  <span className="text-[#E2B558] font-space text-xs">$ {configs.exteriorDesign.brakesColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
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
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-16px]">
                  <LeatherColor />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Leather color</small>
                  <span className="text-[#E2B558] font-space text-xs">$ {configs.interiorDesign.leatherColor.price.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className={`w-4 h-8 ${getGradient(configs.interiorDesign.leatherColor.value)}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[214px] mt-14">
        <strong className="font-inter font-semibold uppercase">total</strong>
        <div className="flex flex-col text-[#7D7D7D] font-space mt-1">
          <div className="flex justify-between">
            <small className="text-xs">Car</small><small className="text-xs">$ {carPrice.toLocaleString('en-us', { minimumFractionDigits: 2 })}</small>
          </div>
          <div className="flex justify-between">
            <small className="text-xs">Configurations</small>
            <small className="text-xs">$ {getConfigsPrice().toLocaleString('en-us', { minimumFractionDigits: 2 })}</small>
          </div>
          <span className="text-[#E2B558] text-xl mt-1 text-end">$ {(getConfigsPrice() + carPrice).toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>
      <div className={`primary-btn mt-6 ${progress !== 100 && 'disabled-btn'}`} onClick={() => saveConfigs()}>Send to dealer</div>
    </div>
  );
};
