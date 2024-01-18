import React from 'react'

export default function About(props) {
   const changeback=()=>{
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
      const borderc=()=>{
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
  return (
    <div>
        <h1>About Us</h1>
        <p>TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
The most eminent features of the website are as follows :</p>
      <div style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Text Analyzing and Processing
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-body">
      Remove unnecessary characters, HTML tags, or special characters.Convert text to lowercase.Handle punctuation, white spaces, and other noise in the text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-body">
      It is completely free to use. No credit cards required. Use as much as you want!!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={{backgroundColor:changeback(),color:borderc(),borderColor:borderc()}} className="accordion-body">
      It is compatible with all of your favorite browsers.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
