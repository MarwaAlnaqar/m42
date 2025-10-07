import React from "react";
// import './QuestionsItemstyle.css';
import '../pages/QuestionsPage.css';
export default function  OptionBox  ({ option,IsBack=false  }) {
  const setShowPopup=(location)=>{


  }
 
  return (!IsBack?(<div onClick={setShowPopup(option.redirectPageName)} className="button-option"    
>
  <div className="button-title">{option.name}</div>
  <img className="button_icon"src={option.icon}/>

   
    </div>):(<div onClick={setShowPopup(option.redirectPageName)} className="button-option"    
>
  <img className="button_icon"src={option.icon}/>
  <div className="button-title">{option.name}</div>

   
    </div>)
    
  );
};
