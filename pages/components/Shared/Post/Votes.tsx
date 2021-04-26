import { ChevronDownIcon, ChevronUpIcon } from 'pages/components/Icons';
import React from 'react';

function Votes({ onUpVote, onDownVote, children }) {
  return (
    <div className="flex flex-col items-center">
      <ChevronUpIcon size={5} onClick={onUpVote} color="#5448C8" />

      <div className="font-bold text-sm text-primary">{children}</div>

      <ChevronDownIcon size={5} onClick={onDownVote} />
    </div>
  );
}

export default Votes;
