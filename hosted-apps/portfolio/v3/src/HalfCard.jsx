import "./Card.css";

function HalfCard({ src, alt, href }) {
  return (
    <a href={href} target="_blank">
      <div className="card halfcard">
        <div className="card-content halfcard-content">
          <img style={{width: 11 + 'vmin', opacity: '90%'}} src={src} alt={alt} />
        </div>
      </div>
    </a>
  );
}

export default HalfCard;
