import React, { useState } from 'react';

const TableBody = ({ id, title, firstName, surName, email }) => {
  const [isSelected, setIsSelected] = useState(false); 

  
  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  
  const rowStyle = {
    backgroundColor: isSelected ? 'lightblue' : 'transparent', 
    cursor: 'pointer' 
  };

  return (
    <tr style={rowStyle} onClick={toggleSelection}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surName}</td>
      <td>{email}</td>
    </tr>
  );
}

export default TableBody;