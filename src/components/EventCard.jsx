import { Calendar, Clock, Globe } from "lucide-react";

export default function EventCard({ title, theme, date, time, venue }) {
  return (
    <div className="event-card">

      <h3>{title}</h3>

      <p className="theme">{theme}</p>

      <div className="event-info">
        <p><Calendar size={16}/> {date}</p>
        <p><Clock size={16}/> {time}</p>
        <p><Globe size={16}/> {venue}</p>
      </div>

      <button className="register-btn">
        Join the Session
      </button>

    </div>
  );
}