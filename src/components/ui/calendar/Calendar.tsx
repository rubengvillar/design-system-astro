import React, { useState } from 'react';
import { classMerge } from '../../../utils/classMerge';

export interface CalendarProps {
  initialDate?: Date;
  markedDates?: Date[];
  onSelect?: (date: Date) => void;
  className?: string;
}

export function Calendar({
  initialDate = new Date(),
  markedDates = [],
  onSelect,
  className
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Date Math using native JS Date
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday

  // Previous month data to pad the start of the grid
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  
  // Calculate padding
  // Adjusting so Monday is the first day of the week (if preferred, else keep Sunday as 0)
  // Let's use standard Sunday = 0
  const padStart = firstDayOfMonth;

  const days = [];
  
  // Padding from previous month
  for (let i = 0; i < padStart; i++) {
    days.push({
      date: new Date(year, month - 1, daysInPrevMonth - padStart + i + 1),
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }

  // Padding for next month
  const totalSlots = 42; // 6 rows of 7 days
  const padEnd = totalSlots - days.length;
  for (let i = 1; i <= padEnd; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
    });
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    if (onSelect) onSelect(date);
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const isMarked = (date: Date) => {
    return markedDates.some(marked => isSameDay(marked, date));
  };

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const dayNames = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

  return (
    <div className={classMerge("p-3 w-full max-w-sm rounded-md border bg-background shadow-sm", className)}>
      <div className="flex items-center justify-between pt-1 pb-4">
        <button 
          onClick={handlePrevMonth}
          className="inline-flex items-center justify-center h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-md border border-input transition-colors hover:bg-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div className="text-sm font-medium">
          {monthNames[month]} {year}
        </div>
        <button 
          onClick={handleNextMonth}
          className="inline-flex items-center justify-center h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-md border border-input transition-colors hover:bg-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-[0.8rem] font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((dayObj, i) => {
          const isSelected = selectedDate ? isSameDay(dayObj.date, selectedDate) : false;
          const isToday = isSameDay(dayObj.date, new Date());
          const hasMark = isMarked(dayObj.date);

          return (
            <button
              key={i}
              onClick={() => handleSelect(dayObj.date)}
              className={classMerge(
                "h-8 w-8 p-0 font-normal text-sm rounded-md relative flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                !dayObj.isCurrentMonth && "text-muted-foreground opacity-50",
                dayObj.isCurrentMonth && !isSelected && "hover:bg-accent hover:text-accent-foreground",
                isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                isToday && !isSelected && "bg-accent text-accent-foreground"
              )}
            >
              <span>{dayObj.date.getDate()}</span>
              {hasMark && (
                <div className={classMerge(
                  "absolute bottom-1 w-1 h-1 rounded-full",
                  isSelected ? "bg-primary-foreground" : "bg-primary"
                )} />
              )}
            </button>
          )
        })}
      </div>
    </div>
  );
}
