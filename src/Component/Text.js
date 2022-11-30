import React,{useEffect} from 'react';
import "./Text.css";
import eye from "./Image/eye.png";
import { Widget,addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Text = () => {
//chat box
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };


  return (<>
    <h1>தமிழ்</h1>
    <p>The way you highlighted the <b>Text</b> bold</p>
    <h1 className='overline'>Over line</h1>
    <p>The way you highlighted the <del>Text</del> deleted</p>
    <h2 className='through'>Through line</h2>
    <p>The way you highlighted the <ins>Text</ins> underline</p>
    <h3 className='under'>Under line</h3>
    <p>The way you highlighted the <sub>Text</sub> subscripted</p>
    <p>The way you highlighted the <sup>Text</sup> superscripted</p>
    <p className='firstletter'>The way you highlighted the <span >Text</span> first letter large</p>
    <blockquote>The way you highlighted the <mark className='colorhighlight'>Text</mark> highlighted</blockquote>
    <p className=' textindent'>The way you place the Text right</p>
    <div className="line-break">
 <div>{`literal gap letter 

 between  sentence
 
 `}</div>
 </div>
 <div className='spacing'>Letter spacing</div><br/>
 <p className='lineheight'>Line height<br/>
 Line height</p>
 <div className='shadows'>Shadows</div><br/>
 <div className='selection'>Selection</div><br/>
 <div className='viewport'>Viewport</div><br/>
 <div className='em'>em</div><br/>

{/*chat box */}
<div className='heading' >Chat box</div>
 <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={eye}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
    </>
  )
}

export default Text