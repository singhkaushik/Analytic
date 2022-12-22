import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const onSelectSlot = (pressedDate) => {
  console.log("pressed Date: ", pressedDate);
};

function MyCalendar() {
  return (
    <div className="text-center">
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        selectable={true}
        startAccessor="start"
        onSelectSlot={onSelectSlot}
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default MyCalendar;
