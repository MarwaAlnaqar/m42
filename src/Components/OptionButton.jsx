import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OptionButton({ option }) {
  const navigate = useNavigate();

  const redirectToPage = (path) => {
    if (!path) return;
    navigate(path);
  };

  return (

 <div className="option-box d-flex  align-items-center gap-3 px-4 py-3" >
   <img src={option.src} alt={option.name} onClick={redirectToPage(option.redirectPageName)}/> 
   </div> ); };
   