function HelloWorld() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";

  return (
    <div className="HelloWorld">
      <h1>{data.join(" ")}</h1>
      <p>{number1 + number2}</p>
      <p>The string’s length is {string.length}</p>
    </div>
  );
}

export default HelloWorld;
