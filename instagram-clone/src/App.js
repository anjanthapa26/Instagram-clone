import logo from './Images/logo.png'
import './App.css'
import Home from './components/Home/Home'
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Message from './components/Messages/Message';
import Notification from './components/Notifications/Notification';
import Create from './components/Create/Create';
import StorySection from './components/RightSidebar/StorySection/StorySection';
import { useEffect, useState } from 'react';
import BodyContainer from './components/RightSidebar/BodyContainer/BodyContainer';
import RightMostBar from './components/RightSidebar/RightMostBar/RightMostBar';




function App() {

  const [leftBar,setLeftBar] = useState(true)
  console.log(window.innerWidth);


  useEffect(() => {
    const windowSize = () => {
      if(parseInt(window.innerWidth) < 735) {
        setLeftBar(false)
      }
      else {
        setLeftBar(true)
      }
    }

    window.addEventListener('resize',windowSize);
  })

  
  
  return (
    <>
    {leftBar &&
    <div className='big-container'>
      <div className='image-container'>
        <div className="logo">
          <img src={logo} alt='instagram-logo'></img>
        </div>
      </div>
      <Home />
      <Search />
      <Explore />
      <Message />
      <Notification />
      <Create />
    </div>}
    <div className='right-sidebar'>
      <div className='inner-rightBar'>
        <div>
        <StorySection />
        <BodyContainer />
        </div>
        <div>
          <RightMostBar />
        </div>
      </div>
    </div>
    </>

  );
}
export default App;
