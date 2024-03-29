import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddBookingForm from './AddBookingForm';

describe('AddBookingForm component', () => {
  it('renders the form correctly', () => {
    const { getByText, getByPlaceholderText } = render(<AddBookingForm bookings={[]} setBookings={() => {}} />);
    
    expect(getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Surname')).toBeInTheDocument();
    expect(getByPlaceholderText('Title')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Check In Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Check Out Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Room ID')).toBeInTheDocument();
    expect(getByText('Book now')).toBeInTheDocument();
  });

  it('submits the form with correct data', () => {
    const mockSetBookings = (bookings) => {
      expect(bookings).toEqual([
        {
          id: 1,
          firstName: 'John',
          surname: 'Doe',
          email: 'john.doe@example.com',
          title: 'Mr.',
          roomId: '123',
          checkInDate: '2024-03-15',
          checkOutDate: '2024-03-17',
        }
      ]);
    };

    const { getByPlaceholderText, getByText } = render(<AddBookingForm bookings={[]} setBookings={mockSetBookings} />);
    
    fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByPlaceholderText('Surname'), { target: { value: 'Doe' } });
    fireEvent.change(getByPlaceholderText('Title'), { target: { value: 'Mr.' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByPlaceholderText('Check In Date'), { target: { value: '2024-03-15' } });
    fireEvent.change(getByPlaceholderText('Check Out Date'), { target: { value: '2024-03-17' } });
    fireEvent.change(getByPlaceholderText('Room ID'), { target: { value: '123' } });

    fireEvent.click(getByText('Book now'));
  });
});
