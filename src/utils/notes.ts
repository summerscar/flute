import { Note } from 'tone/build/esm/core/type/NoteUnits';

export type NoteConfig = {
  displayName: string;
  keys: number[];
  note: Note;
};

const NOTES: NoteConfig[] = [
  // 4
  {
    note: 'C3',
    displayName: 'C4',
    keys: [10, 11]
  },
  {
    note: 'C#3',
    displayName: 'C#4 / Db4',
    keys: [10, 11]
  },
  {
    note: 'D3',
    displayName: 'D4',
    keys: [10, 11]
  },
  {
    note: 'D#3',
    displayName: 'D#4 / Eb4',
    keys: [10, 11]
  },
  {
    note: 'E3',
    displayName: 'E4',
    keys: [10, 11]
  },
  {
    note: 'F3',
    displayName: 'F4',
    keys: [10, 11]
  },
  {
    note: 'F#3',
    displayName: 'F#4 / Gb4',
    keys: [10, 11]
  },
  {
    note: 'G3',
    displayName: 'G4',
    keys: [10, 11]
  },
  {
    note: 'G#3',
    displayName: 'G#4 / Ab4',
    keys: [10, 11]
  },
  {
    note: 'A3',
    displayName: 'A4',
    keys: [10, 11]
  },
  {
    note: 'A#3',
    displayName: 'A#4 / Bb4',
    keys: [10, 11]
  },
  {
    note: 'B3',
    displayName: 'B4',
    keys: [10, 11]
  },
  // 5
  {
    note: 'C4',
    displayName: 'C5',
    keys: [10, 11]
  },
  {
    note: 'C#4',
    displayName: 'C#5 / Db5',
    keys: [10, 11]
  },
  {
    note: 'D4',
    displayName: 'D5',
    keys: [10, 11]
  },
  {
    note: 'D#4',
    displayName: 'D#5 / Eb5',
    keys: [10, 11]
  },
  {
    note: 'E4',
    displayName: 'E5',
    keys: [10, 11]
  },
  {
    note: 'F4',
    displayName: 'F5',
    keys: [10, 11]
  },
  {
    note: 'F#4',
    displayName: 'F#5 / Gb5',
    keys: [10, 11]
  },
  {
    note: 'G4',
    displayName: 'G5',
    keys: [10, 11]
  },
  {
    note: 'G#4',
    displayName: 'G#5 / Ab5',
    keys: [10, 11]
  },
  {
    note: 'A4',
    displayName: 'A5',
    keys: [10, 11]
  },
  {
    note: 'A#4',
    displayName: 'A#5 / Bb5',
    keys: [10, 11]
  },
  {
    note: 'B4',
    displayName: 'B5',
    keys: [10, 11]
  },
  // 6
  {
    note: 'C5',
    displayName: 'C6',
    keys: [10, 11]
  },
  {
    note: 'C#5',
    displayName: 'C#6 / Db6',
    keys: [10, 11]
  },

  {
    note: 'D5',
    displayName: 'D6',
    keys: [10, 11]
  },
  {
    note: 'D#5',
    displayName: 'D#6 / Eb6',
    keys: [10, 11]
  },
  {
    note: 'E5',
    displayName: 'E6',
    keys: [10, 11]
  },
  {
    note: 'F5',
    displayName: 'F6',
    keys: [10, 11]
  },
  {
    note: 'F#5',
    displayName: 'F#6 / Gb6',
    keys: [10, 11]
  },
  {
    note: 'G5',
    displayName: 'G6',
    keys: [10, 11]
  },
  {
    note: 'G#5',
    displayName: 'G#6 / Ab6',
    keys: [10, 11]
  },
  {
    note: 'A5',
    displayName: 'A6',
    keys: [10, 11]
  },
  {
    note: 'A#5',
    displayName: 'A#6 / Bb6',
    keys: [10, 11]
  },
  {
    note: 'B5',
    displayName: 'B6',
    keys: [10, 11]
  },
  // 7
  {
    note: 'C6',
    displayName: 'C7',
    keys: [10, 11]
  },
  {
    note: 'C#6',
    displayName: 'C#7 / Db7',
    keys: [10, 11]
  },
  {
    note: 'D6',
    displayName: 'D7',
    keys: [10, 11]
  }
];

export default NOTES;
