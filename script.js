fetch("http://localhost:5000/api/expenses")
  .then((res) => res.json)
  .then((data) => console.log(data));
