import React, { useState, useEffect, useRef } from 'react';
import '../Styles/CustomDropdown.css';

const CustomDropdown = ({ options = [], placeholder = "Select Option", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selected}
      </div>
      <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        {options.map((option, index) => (
          <div className="option" key={index} onClick={() => handleSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
