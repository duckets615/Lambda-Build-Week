
  function Characteristics(attributes) {
    this.name = attributes.name;
    this.lastName = attributes.lastName;
  }
  
  
  
  const queen = new Characteristics({
    name: "Destiny",
    lastName: "Tibbitts",
  });

  console.log(queen.name)