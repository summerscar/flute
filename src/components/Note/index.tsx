import { NoteConfig } from '@/utils/notes';
import './index.scss';

type NoteProps = {
  noteConfig?: NoteConfig;
};

const Note: React.FC<NoteProps> = ({ noteConfig }) => {
  if (!noteConfig) return null;
  return (
    <div className="notePreview">
      <h1>{noteConfig.displayName}</h1>
    </div>
  );
};

export default Note;
