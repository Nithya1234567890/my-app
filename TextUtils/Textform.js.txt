import React, { useState } from "react";
export default function Textform(props) {
  const [text,setText]=useState('');
  let words=text.trim().split(/\s+/).filter((element)=>{return element!==''}).length;
  let char=text.trim().length;
  let min=0.008*text.trim().split(/\s+/).filter((element)=>{return element!==''}).length;
  const handleUp=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    words>0?props.showAlert('success','converted to UpperCase'):props.showAlert('warning','You have not entered any text');
  }                                                                                                                                       
  const handleChange=(e)=>{
    setText(e.target.value);
  }
  const handleLo=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    words>0?props.showAlert('success','converted to LowerCase'):props.showAlert('warning','You have not entered any text');

  }
  const handlesp=()=>{
    let newtext=text.replace(/\s+/g,' ');
    setText(newtext)
    words>0?props.showAlert('success','Spaces cleared'):props.showAlert('warning','You have not entered any text');

  }
  const handleclr=()=>{
    setText('');
    words>0?props.showAlert('success','Text Cleared'):props.showAlert('warning','You have not entered any text');

  }
  const handlecp=()=>{
    document.getElementById('box').select();
    navigator.clipboard.writeText(text);
    words>0?props.showAlert('success','Copied to Clipborad'):props.showAlert('warning','You have not entered any text');
  }
  const handlerev=()=>{
    let ch=text.split('');
    setText(ch.reverse().join(''));
    words>0?props.showAlert('success','Text Reversed'):props.showAlert('warning','You have not entered any text');
  }
  const handleli=()=>{
    let s=new SpeechSynthesisUtterance();
    s.text=text;
    s.rate=1;
    s.pitch=1;
    speechSynthesis.speak(s);
    words>0?props.showAlert('success','Converted to Speech'):props.showAlert('warning','You have not entered any text');
  }
  const handlenotli=()=>{
    speechSynthesis.cancel();
    words>0?props.showAlert('success','Stopped listening Speech'):props.showAlert('warning','You have not entered any text');
  }
  const changebackGround=()=>{
    if(props.themeColor==='red'){
      return '#832e2e';
    }
    if(props.themeColor==='blue'){
      return '#05052f';
    }
    if(props.themeColor==='green'){
      return '#0d3a0d';
    }
    if(props.themeColor==='white'){
      return '#6c757d';
    }
    if(props.themeColor==='black'){
      return '#6c757d';
    }
  }
  const changeBorder=()=>{
    if(props.themeColor==='red'){
      return 'white';
    }
    if(props.themeColor==='blue'){
      return 'white';
    }
    if(props.themeColor==='green'){
      return 'white';
    }
    if(props.themeColor==='white'){
      return 'black';
    }
    if(props.themeColor==='black'){
      return 'white';
    }
  }
  const back=()=>{
    if(props.themeColor==='red'){
      return '#832e2e';
    }
    if(props.themeColor==='blue'){
      return '#05052f';
    }
    if(props.themeColor==='green'){
      return '#0d3a0d';
    }
    if(props.themeColor==='white'){
      return 'white';
    }
    if(props.themeColor==='black'){
      return 'black';
    }
  }
  const border=()=>{
    if(props.themeColor==='red'){
      return 'white';
    }
    if(props.themeColor==='blue'){
      return 'white';
    }
    if(props.themeColor==='green'){
      return 'white';
    }
    if(props.themeColor==='white'){
      return 'black';
    }
    if(props.themeColor==='black'){
      return 'white';
    }
  }
  const handlecap=()=>{
    let newtext=text.replace(/\s+/g,' ');
    let no=newtext.split(' ');
    let cap=no.map(function(nos){
      return nos.charAt(0).toUpperCase()+nos.slice(1).toLowerCase();
    });
    setText(cap.join(' '));
    words>0?props.showAlert('success','Words Capitalized'):props.showAlert('warning','You have not entered any text');
  }
  return (
    <>
    <div className="container my-4">
      <div className="mb-3">
        <h2>Enter Text Below to analyze</h2>
        <textarea
          className="form-control"
          id="box"
          rows="7"
          value={text}
          style={{borderColor:border(),backgroundColor:back(),color:border()}}
          // onClick={handleUp}
          onChange={handleChange}
        ></textarea>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handleUp} className="btn btn-secondary my-3">Convert to UppperCase</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handleLo} className="btn btn-secondary my-3 mx-2">Convert to LowerCase</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handlesp} className="btn btn-secondary my-3">Remove Extra Spaces</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handlecp} className="btn btn-secondary my-3 mx-2">Copy Text</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handleclr} className="btn btn-secondary my-3">Clear Text</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handlecap} className="btn btn-secondary my-3 mx-1">Capitalize first letter in a word</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handlerev} className="btn btn-secondary my-3 mx-1">Reverse Text</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handleli} className="btn btn-secondary my-3 mx-1">Listen Text</button>
    <button disabled={text.length===0} style={{backgroundColor:changebackGround(),borderColor:changeBorder()}} type="button" onClick={handlenotli} className="btn btn-secondary my-3 mx-1">Stop Listening Text</button>
      </div>
      <h3>Your Text Summary</h3>
      <p>{words} words and {char} characters</p>
      <p>{min} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  );
}
