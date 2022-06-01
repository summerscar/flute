import React, { RefObject } from 'react';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { play } from '@/utils/tone-flute';
import type { Actions } from '@/components/Flute';

import './index.scss';

type ControlBarProps = {
  actions: RefObject<Actions>;
};

const ControlBar: React.FC<ControlBarProps> = ({ actions }) => {
  const handlePlayTone = (tone: Note) => () => {
    play(tone);
    actions.current?.setMaterialWithKeyIndex?.(10);
  };
  const handleReset = () => {
    actions.current?.reset?.();
  };

  return (
    <div className="controlBar">
      <button onClick={handlePlayTone('C5')}>❶</button>
      <button onClick={handlePlayTone('D5')}>❷</button>
      <button onClick={handlePlayTone('E5')}>❸</button>
      <button onClick={handleReset}>重置</button>
    </div>
  );
};

export default ControlBar;
