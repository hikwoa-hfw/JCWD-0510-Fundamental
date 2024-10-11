// no 1

class Employee {
  name: string;
  gender: string;
  workingHours: number;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}

class FulltimeEmployee extends Employee {
  salary: number;
  overtimeSalary: number;

  constructor(name: string, gender: string) {
    super(name, gender);
    this.workingHours = 0;
    this.salary = 0;
    this.overtimeSalary = 0;
  }
  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }
  infoGajian() {
    if (this.workingHours <= 6) {
      this.salary += this.workingHours * 100_000;
    } else {
      this.salary = 6 * 100_000;

      this.overtimeSalary += (this.workingHours - 6) * 75000;
    }

    return {
      name: this.name,
      gender: this.gender,
      normalsalary: this.salary.toLocaleString("id-ID"),
      overTimeSalary: this.overtimeSalary.toLocaleString("id-ID"),
      totalSalary: this.overtimeSalary + this.salary.toLocaleString("id-ID"),
    };
  }
}
class ParttimeEmployee extends Employee {
  salary: number;

  constructor(name: string, gender: string) {
    super(name, gender);
    this.workingHours = 0;
    this.salary = 0;
  }
  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }
  infoGajian() {
    if (this.workingHours <= 6) {
      this.salary += this.workingHours * 50_000;
    } else {
      this.salary = 6 * 50000;
      this.salary += (this.workingHours - 6) * 30000;
    }

    return this.salary;
  }
}

const gaji = new FulltimeEmployee("hibban", "cwk");
gaji.addWorkingHours(2);
gaji.addWorkingHours(2);
gaji.addWorkingHours(2);
gaji.addWorkingHours(2);
gaji.addWorkingHours(2);
// gaji.addWorkingHours();

// const pegaway = new Employee()
// const fullTime = new FulltimeEmployee()
console.log(gaji.infoGajian());

// 2

class Player {
  name: string;
  health: number;
  power: number;
  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  hit(power: number) {
    this.health -= power;
  }
  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    return `${this.name} -> Health : ${this.health} | Power : ${this.power}`;
  }
}
class ShooringGame {
  player1: Player;
  player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }
  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // get random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      // use random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);
      // hit player
      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);

      // show stats
      console.log(this.player1.showStatus);
      console.log(this.player2.showStatus);
    }
    if (this.player1.health <= 0) {
      return `${this.player2.name} WIN`;
    } else {
      return `${this.player1.name} WIN`;
    }
  }
}

const player1 = new Player("shockdart")
const player2 = new Player("rena")

const game = new ShooringGame(player1,player2)
console.log(game.start());
