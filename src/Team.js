export default class Team {
  constructor() {
    this.members = new Set();
  }

  // метод добавления персонажа в команду
  add(member) {
    if (this.members.has(member)) {
      throw new Error('Данный персонаж уже находится в команде!');
    }
    this.members.add(member);
  }

  // добавляет несколько персонажей в команду
  addAll(...members) {
    members.forEach((member) => {
      if (this.members.has(member)) {
        throw new Error('Данный персонаж уже находится в команде!');
      }
      this.members.add(member);
    });
  }

  // выводит массив команды
  toArray() {
    return Array.from(this.members);
  }
}
