import { useEffect, useRef, useState } from "react";

type IData = {
  step: number;
  checkShow: () => boolean;
  nextStep: () => void;
  close: () => void;
};

export default (storageKey: string) => {
  const [step, setStep] = useState<number>(0);
  const checkShow = () => {
    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(storageKey, "yes");
      setStep(1);
      return false
    } else {
      return true;
    }
  };
  const close = () => {
    setStep(0);
  };
  const nextStep = () => {
    setStep((v) => v + 1);
  };
  return {
    step,
    checkShow,
    nextStep,
    close,
  } as IData;
};
