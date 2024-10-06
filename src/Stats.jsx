export default function Stats({stat}) {
  return (
    <section className="stats">
      <Stat number={stat.numberWords} title="Words" />
      <Stat number={stat.numberCharacter} title="Character" />
      <Stat number={stat.numberOfInstagram} title="Instagram" />
      <Stat number={stat.numberOfFacebook} title="Facebook" />
    </section>
  );
}
function Stat({ number, title }) {
  return (
    <section className="stat">
      <span className={ `stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
}
