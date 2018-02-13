import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default ({selectedDay, handleDayChange}) => (
  <div className="field">
    <label className="label">Select the desired day:</label>
    <div className="control">
      <DayPickerInput
        value={selectedDay}
        onDayChange={handleDayChange}
      />
    </div>
  </div>
);