function someCode(size, name) {
  this.carSize = size;
  this.carName = name;

  someCode.prototype.whatAmI = () => {
    console.log(
      `you are a car named ${this.carName} and you're about ${this.carSize} long`
    );
  };
}

someCar = new someCode("40ft", "Toyota");
someCar.whatAmI();
