import Magician from '../classMagician';
import Daemon from '../classDaemon';

test('test attack', () => {
  const magicianName = new Magician();
  magicianName.attack = 6;
  expect(magicianName.attack).toBe(50);
});

test('test stoned', () => {
  const daemonName = new Daemon();
  daemonName.stoned = true;
  daemonName.attack = 2;
  expect(daemonName.stoned).toBe(true);
  expect(daemonName.attack).toBe(85);
});