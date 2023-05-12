import Team from '../Team';
import Character from '../Character';

describe('Team class', () => {
  const team = new Team();
  const John = new Character('John');
  const Jane = new Character('Jane');
  const Jack = new Character('Jack');

  it('Добавить нового участника в команду', () => {
    team.add(John);
    expect(team.members.size).toBe(1);
  });

  it('Добавление такого же персонажа генерирует ошибку', () => {
    expect(() => team.add(John)).toThrow('Данный персонаж уже находится в команде!');
  });

  it('Добавление нескольки персонажей', () => {
    team.addAll(Jane, Jack);
    expect(team.members.size).toBe(3);
  });

  it('Добавление нескольких одинаковых участников вызывает ошибку', () => {
    expect(() => team.addAll(John, Jane, Jack, Jane)).toThrow('Данный персонаж уже находится в команде!');
  });

  it('Должен вернуть массив членов команды', () => {
    const arr = team.toArray();
    expect(arr.length).toBe(3);
    expect(arr).toContain(John);
    expect(arr).toContain(Jane);
    expect(arr).toContain(Jack);
  });
});
