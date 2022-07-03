/*
 * @Author: 鱼小柔
 * @Date: 2022-07-03 17:04:17
 * @LastEditors: your name
 * @LastEditTime: 2022-07-03 19:57:51
 * @Description: file content
 */
import logo from './logo.svg';
import './App.css';
import FilePreviewer from './components/FilePreviewer';
import { useState } from 'react';

function App() {
  const [visible,setVisible] = useState(false)
  const handleClick=()=>{
    debugger
    setVisible(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={handleClick} style={{cursor:'pointer'}}>
          点击弹窗
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FilePreviewer visible={visible}/>
    </div>
  );
}

export default App;
