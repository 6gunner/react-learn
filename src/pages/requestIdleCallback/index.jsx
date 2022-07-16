import React, { useRef, useEffect, useState } from 'react';
import './index.css'

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let taskList = [];
let statusRefreshScheduled = false;
let taskHandle;
let logFragment;

function Example() {
  const [totalTaskCount, setTotalTaskCount] = useState(0);

  const logs = useRef([]);
  const logRef = useRef();
  const currentTaskNumber = useRef(0);

  /**
   * 加入任务队列
   * @param {*} handler 
   * @param {*} data 
   */
  const enqueueTask = (handler, data) => {
    taskList.push({
      handler,
      data,
    })
    setTotalTaskCount(taskList.length);
    if (!taskHandle) {
      taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
    }
  }

  const runTaskQueue = (deadline) => {
    if ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.length) {
      const task = taskList.shift();
      // setCurrentTaskNumber(val => val + 1);
      currentTaskNumber.current = currentTaskNumber.current + 1;
      task.handler(task.data);
      scheduleStatusRefresh(); // 每次idlecallback执行之后，去刷新dom
    }
    if (taskList.length) {
      taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 })
    } else {
      taskHandle = null;
    }
  }

  const start = () => {
    taskList = [];
    currentTaskNumber.current = 0;
    logRef.current.innerHTML = "";
    let n = getRandomIntInclusive(10, 20);
    for (let i = 0; i < n; i++) {
      let taskData = {
        count: getRandomIntInclusive(75, 150),
        text: "This text is from task number " + (i + 1).toString() + " of " + n
      };
      enqueueTask(logTaskHandler, taskData);
    }
  }

  const scheduleStatusRefresh = () => {
    if (!statusRefreshScheduled) {
      requestAnimationFrame(updateDisplay);
      statusRefreshScheduled = true;
    }
  }

  const updateDisplay = () => {
    debugger

    const logElement = logRef.current;
    const scrollEnd = logElement.scrollHeight - logElement.clientHeight >= logElement.scrollTop + 1;
    if (scrollEnd) {
      debugger
      logElement.scrollTop = logElement.scrollHeight - logElement.clientHeight
    }
    if (logFragment) {
      logRef.current.append(logFragment);
      logFragment = null;
    }
    statusRefreshScheduled = false;
  }


  const logTaskHandler = (data) => {
    function log(text) {
      if (!logFragment) {
        logFragment = document.createDocumentFragment();
      }
      const el = document.createElement("div");
      el.innerHTML = text;
      logFragment.appendChild(el);
    }
    log("<strong>Running task #" + currentTaskNumber.current + "</strong>");
    for (let i = 0; i < data.count; i += 1) {
      log((i + 1).toString() + ". " + data.text);
    }
    // logs.current = [...logs.current, data];
  }

  const renderText = (data, key) => {
    let array = [];
    for (let i = 0; i < data.count; i += 1) {
      array.push(<div key={`${key}-${i}`}>{`${i + 1}. ${data.text}`}</div>)
    }
    return array;
  }

  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (!totalTaskCount) {
      return;
    }
    setProgress(currentTaskNumber.current / totalTaskCount)
  }, [totalTaskCount])



  return (
    <div className="container">
      <p className="title">
        Demonstration of using cooperatively scheduled background tasks using the <code>requestIdleCallback()</code> method.
      </p>
      <div className="wrapper">
        <div className="label">Decoding quantum filament tachyon emissions...</div>
        <progress id="progress" value={progress}></progress>
        <button className="button" id="startButton" onClick={start}>
          Start
        </button>
        <div className="label counter">
          Task <span id="currentTaskNumber">{currentTaskNumber.current}</span> of <span id="totalTaskCount">{totalTaskCount}</span>
        </div>
      </div>
      <div className="logBox">
        <div className="logHeader">
          Log
        </div>
        <div id="log" ref={logRef}>
          {
            logs.current.map((value, key) => (
              <div key={key}>
                <strong>{`Running task #${key + 1}`}</strong>
                {
                  renderText(value, key)
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Example;