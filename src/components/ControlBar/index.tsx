import React, { RefObject } from 'react';
import { Actions } from '@/components/Flute';

import './index.scss';

type ControlBarProps = {
  actions: RefObject<Actions>;
};

const ControlBar: React.FC<ControlBarProps> = ({ actions }) => {
  const handleSetMaterialWithKeyIndex = (index: number) => () => {
    actions.current?.setMaterialWithKeyIndex?.(index);
  };
  const handleReset = () => {
    actions.current?.reset?.();
  };

  return (
    <div className="controlBar">
      <button onClick={handleSetMaterialWithKeyIndex(4)}>❶</button>
      <button onClick={handleSetMaterialWithKeyIndex(8)}>❷</button>
      <button onClick={handleSetMaterialWithKeyIndex(11)}>❸</button>
      <button onClick={handleReset}>重置</button>
    </div>
  );
};

export default ControlBar;
