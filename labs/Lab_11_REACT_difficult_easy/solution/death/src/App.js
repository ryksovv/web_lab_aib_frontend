import React, { useState } from 'react';
import { format, addMonths, subMonths, isToday } from 'date-fns';
import './App.css';

const DayInfo = ({ date, notes }) => (
  <div className="day-info">
    <h3>{format(date, 'dd.MM.yyyy')}</h3>
    <p>{`Количество заметок: ${notes.length}`}</p>
    {notes.length > 0 && (
      <div>
        <p>Список заметок:</p>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <span>{`Важность: ${note.importance}`}</span>
              <span>{`Заметка: ${note.content}`}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState([]);
  const [selectedNoteDate, setSelectedNoteDate] = useState(null);
  const [noteContent, setNoteContent] = useState('');

  const daysInMonth = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    for (let day = new Date(startOfMonth); day <= endOfMonth; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedNoteDate(date);
    setNoteContent('');
  };

  const handleAddNote = () => {
    const newNote = {
      date: selectedNoteDate,
      importance: 'High',
      content: noteContent,
    };

    setNotes([...notes, newNote]);
    setSelectedNoteDate(null);
    setNoteContent('');
  };

  const handleDeleteNote = (noteDate) => {
    const updatedNotes = notes.filter((note) => note.date !== noteDate);
    setNotes(updatedNotes);
  };

  const handleMonthChange = (action) => {
    setSelectedDate((prevDate) =>
      action === 'next' ? addMonths(prevDate, 1) : subMonths(prevDate, 1)
    );
  };

  const days = daysInMonth(selectedDate);

  return (
    <div className="calendar-container">
      <div className="header">
        <button onClick={() => handleMonthChange('prev')}>&lt;</button>
        <h2>{format(selectedDate, 'LLLL yyyy')}</h2>
        <button onClick={() => handleMonthChange('next')}>&gt;</button>
      </div>
      <div className="days">
        {days.map((day) => (
          <div
            key={day}
            className={`day ${isToday(day) ? 'today' : ''} ${
              notes.some((note) => note.date.getTime() === day.getTime()) ? 'has-note' : ''
            }`}
            onClick={() => handleDateClick(day)}
          >
            <div className="day-number">{format(day, 'd')}</div>
            <div className="note-count">
              {notes.filter((note) => note.date.getTime() === day.getTime()).length}
            </div>
          </div>
        ))}
      </div>
      <div className="note-form-container">
        {selectedNoteDate && (
          <div className="note-form">
            <h3>Добавить заметку</h3>
            <p>{format(selectedNoteDate, 'dd.MM.yyyy')}</p>
            <textarea
              rows="4"
              placeholder="Введите заметку"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
            <button onClick={handleAddNote}>Добавить</button>
          </div>
        )}
      </div>
      <div className="notes-list">
        <h3>Список заметок</h3>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <span>{format(note.date, 'dd.MM.yyyy')}</span>
              <span>{note.importance}</span>
              <span>{note.content}</span>
              <button onClick={() => handleDeleteNote(note.date)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedNoteDate && (
        <DayInfo
          date={selectedNoteDate}
          notes={notes.filter((note) => note.date.getTime() === selectedNoteDate.getTime())}
        />
      )}
    </div>
  );
};

export default Calendar;
