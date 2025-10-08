import React from "react";
// import './QuestionsItemstyle.css';
import '../pages/QuestionsPage.css';
import { useNavigate } from 'react-router-dom';
export default function  OptionBox  ({ option,IsBack=false  }) {
   const navigate = useNavigate();
  console.log('option box')
  console.log(option.icon)

  console.log(`${import.meta.env.BASE_URL}assets/m42/${option.icon}`)
  const setShowPopup=(location)=>{


  }
 
  return (!IsBack?(<div onClick={setShowPopup(option.redirectPageName)} className="button-option"    
>
  <div className="button-title">{option.name}</div>
  <img className="button_icon"src={`${import.meta.env.BASE_URL}assets/m42/${option.icon}`}/>

   
    </div>):(<div    onClick={() => navigate(-1)} className="button-option"    
>
  <img className="button_icon" src={`${import.meta.env.BASE_URL}assets/m42/${option.icon}`}/>
  <div className="button-title">{option.name}</div>

   
    </div>)
    
  );
};
