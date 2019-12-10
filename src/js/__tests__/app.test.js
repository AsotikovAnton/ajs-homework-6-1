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
  expect(() => new Character(7, 'Daemon')).toThrow();
});

test('Слишком короткое имя', () => {
  expect(() => new Character('A', 'Swordsman')).toThrow();
});

test('Слишком длинное имя', () => {
  expect(() => new Character('Legolas Greenleaf', 'Bowman')).toThrow();
});

test('Неверный тип персонажа', () => {
  expect(() => new Character('Gimli', 'Dwarf')).toThrow();
});
