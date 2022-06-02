import React, { useRef } from 'react';
import '@/App.scss';
import ControlBar, { CameraTypes } from '@/components/ControlBar';
import Note from '@/components/Note';
import Flute, { Actions } from '@/components/Flute';
import { NoteConfig } from '@/utils/notes';

function App() {
  const actions = useRef<Actions>(null);
  const [currentNote, setCurrentNote] = React.useState<NoteConfig>();
  const handleChangeNote = (noteConfig: NoteConfig) => {
    actions.current?.reset?.();
    actions.current?.setMaterialWithKeys?.(noteConfig.keys);
    setCurrentNote(noteConfig);
  };

  const handleTypeChange = (type: CameraTypes) => {
    if (type === 'front') {
      actions.current?.setCameraPosition?.(0, 0, 750);
    } else if (type === 'back') {
      actions.current?.setCameraPosition?.(0, 0, -700);
    } else {
      actions.current?.setCameraPosition?.(0, -650, 300);
    }
  };
  return (
    <div className="App">
      <Note noteConfig={currentNote} />
      <Flute actionRef={actions} />
      <ControlBar onChange={handleChangeNote} onTypeChange={handleTypeChange} />
    </div>
  );
}

export default App;
