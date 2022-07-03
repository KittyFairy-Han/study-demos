/*
 * @Author: 鱼小柔
 * @Date: 2022-07-03 17:22:22
 * @LastEditors: your name
 * @LastEditTime: 2022-07-03 20:14:35
 * @Description: file content
 */

import { useEffect, useState } from "react";
import "./index.css";
const FilePreviewer = ({ visible,onClose }) => {
  const [realVisible, setRealVisible] = useState(false);

  const hideSelf = ()=>{
    setRealVisible(false)
    onClose&&onClose()
  }

  useEffect(() => {
    setRealVisible(visible);
  }, [visible]);

  useEffect(()=>{
    if (realVisible) {
        
    }


  },[realVisible])
  return (
    <div className="star-file-preview" style={{ display: realVisible ? "unset" : "none" }}>
      <div className="star-file-preview-mask"></div>
      <div className="star-file-preview-body">
        <div className="star-file-preview-content"></div>
        <div className="star-file-preview-close" onClick={hideSelf}>x</div>
      </div>
    </div>
  );
};
export default FilePreviewer;
