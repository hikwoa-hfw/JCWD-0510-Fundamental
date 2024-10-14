//  no 1
class Train {
  container: string[];
  maxSize: number;

  constructor() {
    this.container = ["masinis"];
    this.maxSize = 5;
  }

  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.container
        .filter((value) => value !== "masinis")
        .join(", "),
      remainingSeat: (this.maxSize = this.container.length),
    };
  }

  passengerIn(name: string) {
    return "train is full1";
  }

  passengerOut(name: string) {
    if (name === "masinis") return "cannot remove masinis";

    if (this.isEmpty()) return "train is empty";

    const index = this.container.indexOf(name)

    if (index === -1) {
        return "passenger not found"
    }
    this.container.splice(index, 1)
    return "remove passenger success"
  }
}

const taksaka = new Train()

console.log(taksaka.passengerIn("wahyu galon"));
console.log(taksaka.passengerIn("agung knalpot"));
console.log(taksaka.passengerIn(""));
//  salah wwkkw salah di passenger in kurang syaratnya

