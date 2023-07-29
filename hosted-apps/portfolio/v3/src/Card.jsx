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
          {stack &&
            stack.length === 2 ?
            <h4 className="stack">{stack[0]}<br/>{stack[1]}</h4>
            :
            <h4 className="stack">{stack[0]}<br/>{stack[1]}<br/>{stack[2]}<br/>{stack[3]}</h4>
          }
        </div>
      </div>
    </a>
  );
}

export default Card;
