import "./Card.css";

function Card({ title, subtitle, href, stack }) {
  return (
    <a href={href} className="card-anchor" target="_blank">
      <div className="card">
        <div className="card-content">
          <main>
            <h3 className="card-title">{title}</h3>
            <h4 className="card-subtitle">{subtitle}</h4>
          </main>
          <div className="stack">
            <h4>{stack[0]}<br/>{stack[1]}</h4>
            {stack && stack.length === 4 &&
              <h4 className="second-stack">{stack[2]}<br/>{stack[3]}</h4>
            }
          </div>

        </div>
      </div>
    </a>
  );
}

export default Card;
