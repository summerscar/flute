import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';

const urls = {
  A3: require('@/samples/A3.mp3'),
  A4: require('@/samples/A4.mp3'),
  A5: require('@/samples/A5.mp3'),
  C3: require('@/samples/C3.mp3'),
  C4: require('@/samples/C4.mp3'),
  C5: require('@/samples/C5.mp3'),
  C6: require('@/samples/C6.mp3'),
  E3: require('@/samples/E3.mp3'),
  E4: require('@/samples/E4.mp3'),
  E5: require('@/samples/E5.mp3')
};

const TimeToRelease = 2500;

const sampler = new Tone.Sampler({
  urls
}).toDestination();

let stopTimer: ReturnType<typeof setTimeout>;

const play = (tone: Note = 'C5') => {
  console.log('tone:', tone);
  stopTimer && clearTimeout(stopTimer);

  Tone.loaded().then(() => {
    sampler.releaseAll();
    sampler.triggerAttack(tone);

    stopTimer = setTimeout(sampler.releaseAll.bind(sampler), TimeToRelease);
  });
};

export { play };
