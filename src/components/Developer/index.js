import "./style.css";

function IntroCard({ name, age, country }) {
  return (
    <div className="introCard">
      <span>
        <p className="introCard__name"> Dev : {name}</p>
      </span>
      <span>
        <p>Idade: {age} </p>
      </span>
      <span>
        <p>Pais: {country}</p>
      </span>
    </div>
  );
}

export default IntroCard;
