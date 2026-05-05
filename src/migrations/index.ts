import * as migration_20260505_172453 from './20260505_172453';

export const migrations = [
  {
    up: migration_20260505_172453.up,
    down: migration_20260505_172453.down,
    name: '20260505_172453'
  },
];
