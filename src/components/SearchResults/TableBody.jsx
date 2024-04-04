import React, { useState } from 'react';
import dayjs from 'dayjs';

const CombinedTableBody = ({ booking, handleShowProfile }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const rowStyle = {
    backgroundColor: isSelected ? 'lightblue' : 'transparent',
    cursor: 'pointer'
  };

  const testid = 'showProfileButton' + booking.id;

  return (
    <tr style={rowStyle} onClick={toggleSelection}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname || booking.surName}</td>
      <td>
        {dayjs(booking.checkOutDate)
          .diff(dayjs(booking.checkInDate), 'days')
          .toString()
          .padStart(2, '0')}
      </td>
      <td>{booking.email}</td>
      <td>
        <button data-testid={testid} value={booking.id} onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default CombinedTableBody;
