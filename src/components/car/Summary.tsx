import React, { useEffect, useState } from "react";
import PrimaryColor from "../../assets/icons/primary-color.svg"

export const Summary = ({handleUpdateEnviroment}: any) => { // TODO: fix types
  const [internal, setInternal] = useState(false);

  function updateInternal(data: boolean) {
    setInternal(data)
    handleUpdateEnviroment(data)
  }

  return (
    <div className="flex flex-col w-[20vw] bg-[#1C1C1C] items-center py-8 px-12 text-white">
      <div className="flex flex-col w-[214px]">
        <strong className="font-inter font-semibold uppercase">view</strong>
        <div className="flex font-inter uppercase font-medium text-xs mt-4 cursor-pointer">
          <div className={`rounded-s-[10px] border border-[#E2B558] ${internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(true)}>interior</div>
          <div className={`rounded-e-[10px] border border-[#E2B558] ${!internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(false)}>exterior</div>
        </div>
      </div>
      <div className="flex flex-col w-[214px] mt-14">
        <strong className="font-inter font-semibold uppercase">summary</strong>
        <div className="flex flex-row mt-8">
          <div className="flex flex-col items-center py-1">
            <div className="h-3 w-3 bg-[#7d7d7d] rounded" />
            <div className="w-px bg-[#7d7d7d] h-96 mt-4"></div>
          </div>
          <div className="flex flex-col flex-1">
            <span className="font-inter text-sm ml-4">Exterior design</span>
            <div className="flex justify-between items-center my-8">
              <div className="flex flex-row items-center relative">
                <div className="icon-holder bg-[#1C1C1C] p-1 absolute left-[-18px]">
                  <PrimaryColor />
                </div>
                <div className="flex flex-col pl-4">
                  <small className="font-space text-[10px]">Primary color</small>
                  <span className="text-[#E2B558] font-space text-xs">$ 00.0</span>
                </div>
              </div>
              <div className="w-4 h-8 redGradient"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
