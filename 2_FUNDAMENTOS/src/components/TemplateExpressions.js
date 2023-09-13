const TemplateExpressions = () => {
  const name = "Marcio";
  const data = {
    age: 31,
    job: "Programador",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{2 + 2}</p>
    </div>
  );
};

export default TemplateExpressions;
