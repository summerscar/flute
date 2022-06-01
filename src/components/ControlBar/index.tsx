import React, { Fragment } from 'react';
import { play } from '@/utils/tone-flute';
import NOTES, { NoteConfig } from '@/utils/notes';

import './index.scss';

export type CameraTypes = 'front' | 'center' | 'back';

type ControlBarProps = {
  onChange: (noteConfig: NoteConfig) => void;
  onTypeChange: (type: CameraTypes) => void;
};

const ControlBar: React.FC<ControlBarProps> = ({ onChange, onTypeChange }) => {
  const handlePlayTone = (noteConfig: NoteConfig) => () => {
    onChange(noteConfig);
    play(noteConfig.note);
  };
  const handleTypeChange = (type: CameraTypes) => () => {
    onTypeChange(type);
  };
  return (
    <div className="controlBar">
      🎥：
      <button className="noteBtn typeBtn" onClick={handleTypeChange('front')}>
        1️⃣
      </button>
      <button className="noteBtn typeBtn" onClick={handleTypeChange('back')}>
        2️⃣
      </button>
      <button className="noteBtn typeBtn" onClick={handleTypeChange('center')}>
        3️⃣
      </button>
      <div className="divider" />
      {NOTES.map((noteConfig, index) => (
        <Fragment key={noteConfig.note}>
          <button className="noteBtn" onClick={handlePlayTone(noteConfig)}>
            {noteConfig.displayName}
          </button>
          {noteConfig.note.substr(-1) !== NOTES[index + 1]?.note.substr(-1) && (
            <div className="divider" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ControlBar;
