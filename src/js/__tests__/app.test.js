import Character from '../app';

test('Удачное создание зомби по имени Шон', () => {
  const recieved = new Character('Shaun', 'Zombie');
  const expected = {
    name: 'Shaun',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Имя не является строкой', () => {
  const recieved = new Character(7, 'Daemon');
  expect(recieved).toThrow();
});

test('Слишком короткое имя', () => {
  const recieved = new Character('A', 'Swordsman');
  expect(recieved).toThrow();
});

test('Слишком длинное имя', () => {
  const recieved = new Character('Legolas Greenleaf', 'Bowman');
  expect(recieved).toThrow();
});

test('Неверный тип персонажа', () => {
  const recieved = new Character('Gimli', 'Dwarf');
  expect(recieved).toThrow();
});
