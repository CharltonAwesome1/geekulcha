import { Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>GKSS CPUT Chapter</h1>

        <p>
          Bridging school and technology in a fun way.
          Join a community of students exploring innovation,
          development and tech culture.
        </p>

        <button className="join-btn">
          <Users size={18} />
          Join the Chapter
        </button>
      </div>
    </section>
  );
}