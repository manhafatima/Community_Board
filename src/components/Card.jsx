function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.date}</p>

      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="card-button">View More</button>
      </a>
        
    </div>
  );
}

export default Card;