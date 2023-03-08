import "./Card.css";

function Card({ title, subtitle, href }) {
  return (
    <a href={href} target="_blank">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <h4 className="card-subtitle">{subtitle}</h4>
        </div>
      </div>
    </a>
  );
}

export default Card;
