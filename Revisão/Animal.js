class Animal {}
class Cachorro extends Animal {
  latir() {
      return 'Au au!'
  }
}

console.log(new Cachorro().latir())