import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/style.css';
export default function OptionButton({ option ,length }) {
  const navigate = useNavigate();

  const redirectToPage = (path) => {
    console.log(path);
    if (!path) return;
    navigate(path);
  };
const colNumber=12/length;
  return (
  <div  className={`col-md-${colNumber} d-flex justify-content-center`}>
      <img  src={`${import.meta.env.BASE_URL}assets/m42/${option.src}`}
       
        alt={option.name}
        onClick={() => redirectToPage(option.redirectPageName)}
        style={{ cursor: 'pointer' }} // optional: add pointer cursor
      />
    </div>
  );
}