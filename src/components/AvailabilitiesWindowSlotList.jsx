import React from 'react';
import { DateTime } from 'luxon';

const availableItens = (slots) => slots.map((a) => (
  <li key={a.start.toString()}> From {a.start.toLocaleString(DateTime.TIME_SIMPLE)} to {a.end.toLocaleString(DateTime.TIME_SIMPLE)}</li>
));

export default ({slots}) => {
  if (slots.length < 1) {
    return <p> There is no available slots for selected day </p>;
  }
  return <div>
    <b> Availability Slots:</b>
    <ul className="menu-list">
      {availableItens(slots)}
    </ul>
  </div>
};
