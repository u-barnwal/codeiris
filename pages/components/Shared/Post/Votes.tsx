import { ChevronDownIcon, ChevronUpIcon } from 'pages/components/Icons';
import React from 'react';

function Votes({ onUpVote, onDownVote, children, state }) {
  // Todo Add the Deafult and disabled color
  return (
    <div className="flex flex-col items-center">
      <ChevronUpIcon
        size={5}
        onClick={onUpVote}
        color={state === 'upvotes' ? '#5448C8' : '#000'}
      />

      <div className="font-bold text-sm text-primary">{children}</div>

      <ChevronDownIcon
        size={5}
        onClick={onDownVote}
        color={state === 'downvotes' ? '#5448C8' : '#000'}
      />
    </div>
  );
}

export default Votes;
