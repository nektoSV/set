import Team from '../index';

test.each([
  [
    'Error',
    ['Magician', 'Bowman', 'Magician'],
    'Персонаж уже добавлен в команду'
  ],
  [
    'Error',
    ['Daemon', 'Magician', 'Swordsman', 'Swordsman'],
    'Персонаж уже добавлен в команду'
  ]
])// eslint-disable-next-line
('testing add method with %s', (_, characters, expected) => {
  const team = new Team();

  function result() {
    characters.forEach(character => team.add(character));
  }
  
  expect(result).toThrow(expected);
});

test.each([
  [
    'multiple characters',
    ['Magician', 'Bowman', 'Swordsman']
  ],
  [
    'one character',
    ['Daemon']
  ]
])// eslint-disable-next-line
('testing add method with %s', (_, characters) => {
  const team = new Team();

  function result() {
    characters.forEach(character => team.add(character));
  }

  result();
  expect(team.toArray()).toEqual(characters);
});

test.each([
  [
    '3 characters',
    ['Magician', 'Bowman', 'Swordsman'],
    ['Magician', 'Bowman', 'Swordsman']
  ],
  [
    '3 characters with a recurring',
    ['Daemon', 'Magician', 'Daemon'],
    ['Daemon', 'Magician']
  ]
])// eslint-disable-next-line
('testing addAll method with %s', (_, characters, expected) => {
  const team = new Team();

  team.addAll(characters[0], characters[1], characters[2]);

  expect(team.toArray()).toEqual(expected);
});