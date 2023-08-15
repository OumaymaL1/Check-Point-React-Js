const Description = (props) => {
  let Name = "Oumayma -";
  let Email = "oumayma@gmail.com -";
  let Age = "20 -";
  return (
    <div className="utile">
      <h1>{Name}</h1>
      <h1>{Email}</h1>
      <h1>{Age}</h1>
      <h1>{props.adresse}</h1>
      <h1>{props.tel}</h1>
    </div>
  );
};
export default Description;
