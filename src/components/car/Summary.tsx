import React, { useEffect, useState } from "react";

export const Summary = ({handleUpdateEnviroment}: any) => {
  const [internal, setInternal] = useState(false);

  function updateInternal(data: boolean) {
    setInternal(data)
    handleUpdateEnviroment(data)
  }

  return (
    <div className="flex flex-col w-[20vw] bg-[#1C1C1C] items-center py-8 px-12 text-white">
      <div className="flex flex-col">
        <strong className="font-inter font-semibold uppercase">view</strong>
        <div className="flex font-inter uppercase font-medium text-xs mt-4 cursor-pointer">
          <div className={`rounded-s-[10px] border border-[#E2B558] ${internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(true)}>interior</div>
          <div className={`rounded-e-[10px] border border-[#E2B558] ${!internal && 'bg-[#E2B558]'} py-[6px] px-6`} onClick={() => updateInternal(false)}>exterior</div>
        </div>
      </div>
    </div>
  );
};
