import React, { useImperativeHandle, useState, useRef } from "react";
import './style.css'

type FinishCallBack = () => void;
type ShowParams = {
  imgUrls: string[];
  tipText?: string;
  onFinish?: FinishCallBack;
  storageKey: string;
};
const GuideView = (props, guideRef) => {
  const [step, setStep] = useState<number>(0);
  const [list, setList] = useState<string[]>([]);
  const [tip, setTip] = useState<string>("");
  const cbRef = useRef<FinishCallBack>(() => {});
  const close = () => {
    setStep(0);
    cbRef.current();
  };
  const nextStep = () => {
    if (step === list.length) {
      close();
    } else {
      setStep(v => v + 1);
    }
  };

  useImperativeHandle(guideRef, () => ({
    checkShow: ({
      onFinish = Promise.resolve,
      imgUrls,
      tipText = "点击任意位置继续",
      storageKey
    }: ShowParams) => {
      if (localStorage.getItem(storageKey)) {
        return true
      }
      cbRef.current = onFinish;
      setList(imgUrls);
      setTip(tipText);
      setStep(1);
      localStorage.setItem(storageKey,"yes")
    }
  }));

  return step ? (
    <div
      className="beginner-guidance-mask"
      onClick={nextStep}
    >
      <div className="beginner-guidance-steps-container">
        {list.map((item, i) => (
          <img
            src={item}
            style={{ visibility: i === step - 1 ? "visible" : "hidden" }}
            className="beginner-guidance-step-item"
          ></img>
        ))}
      </div>
      <div className="beginner-guidance-tip">
        {tip}
      </div>
    </div>
  ) : null;
};
const BeginnerGuidance = React.forwardRef(GuideView);
const guideRef = React.createRef();

export default BeginnerGuidance;
export { guideRef };
