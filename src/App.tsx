import React, { useRef } from 'react';
import '@/App.scss';
import ControlBar from '@/components/ControlBar';
import Flute, { Actions } from '@/components/Flute';

function App() {
  const actions = useRef<Actions>(null);
  return (
    <div className="App">
      <ControlBar actions={actions} />
      <Flute actionRef={actions} />
    </div>
  );
}

export default App;
