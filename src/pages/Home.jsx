import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="events">
        <h2>Upcoming Event</h2>

        <EventCard
          title="GKSS Virtual Talk"
          theme="Introduction to GKSS CPUT Chapter"
          date="6 March 2026"
          time="17:00 - 18:00"
          venue="Microsoft Teams"
        />
      </section>

      <Footer />
    </div>
  );
}