import React, {useState} from 'react';
import './App.css';
import TabButtons from './components/TabButtons';
import TabContents from './components/TabContents';

function App() {

  const sampleTabs = [
    {name: "Tab 1", content: "Tab 1 content is showing here."},
    {name: "Tab 2", content: "Tab 2 content is showing here."},
    {name: "Tab 3", content: "Tab 3 content is showing here."}
  ];

  const [tabList, setTabList] = useState(sampleTabs);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <TabButtons tabList={tabList} setCurrentIndex={setCurrentIndex} />
      <TabContents tabList={tabList} currentIndex={currentIndex}/>
    </div>
  )
}

export default App