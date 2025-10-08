import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/QuestionsPage.css';
export default function OptionButton({ option }) {
  const navigate = useNavigate();

  const redirectToPage = (path) => {
    console.log(path);
    if (!path) return;
    navigate(path);
  };

  return (
    <div className="option-box d-flex align-items-center gap-3 px-4 py-3">
      <img  src={`${import.meta.env.BASE_URL}/assets/m42/${option.src}`}
       
        alt={option.name}
        onClick={() => redirectToPage(option.redirectPageName)}
        style={{ cursor: 'pointer' }} // optional: add pointer cursor
      />
    </div>
  );
}