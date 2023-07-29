import "./Card.css";

function HalfCard({ title, subtitle, href }) {
  return (
    <a href={href} target="_blank">
      <div className="halfcard">
        <div className="card-content">
          <main>
            <h3 className="card-title">{title}</h3>
            <h4 className="card-subtitle">{subtitle}</h4>
          </main>
        </div>
      </div>
    </a>
  );
}

export default HalfCard;
