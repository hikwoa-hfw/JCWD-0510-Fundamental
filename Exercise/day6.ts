interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

class StudentClass {
  students: Student[]

  inputStudent(murid: Student) {
    this.students.push(murid);
  }
  getScore() {
    const Highest = Math.max(...this.students["score"])[0];
    const Lowest = Math.min(...this.students["score"])[0];
    const Average =
      this.students["score"].reduce((a, b) => a + b) /
      this.students["score"].length;
    return `Highest Score: ${Highest}, Lowest Score: ${Lowest}, Average Score: ${Average}`;
  }
  getAge() {
    const Highest = Math.max(...this.students["age"])[0];
    const Lowest = Math.min(...this.students["age"])[0];
    const Average =
      this.students["age"].reduce((a, b) => a + b) /
      this.students["age"].length;
    return `Highest Age: ${Highest}, Lowest Age: ${Lowest}, Average Age: ${Average}`;
  }
}

const addStudent: Student[] = [
  {
    name: "wahyu",
    email: "wahyu@outlook.com",
    age: 20,
    score: 55,
  },
  {
    name: "abek",
    email: "abc@outlook.com",
    age: 20,
    score: 55,
  },
];
