import Bar from "./Bar";

const Idiomas = ({ languages }) => {
  return (
    <div>
      <p className="heading">IDIOMAS</p>
      {languages.map((leng, index) => {
        return (
          <div key={index}>
            <p className="sub-heading">{leng.name}</p>
            <Bar proficiency={leng.proficiency} />
          </div>
        );
      })}
    </div>
  );
};

export default Idiomas;
