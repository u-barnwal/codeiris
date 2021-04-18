import { Comment } from '../../../gql';
import moment from 'moment';
import { useState } from 'react';
import CommentsInput from './CommentsInput';
import { Transition } from '@headlessui/react';

interface CommentListItemProps {
  comment: any;
}
function CommentListItem({ comment }: CommentListItemProps) {
  const [add, setAdd] = useState(false);
  if (comment === undefined) {
    return <div />;
  }
  return (
    <div
      className="w-full rounded rounded-lg overflow-hidden shadow-sm p-2 bg-white"
      key={comment.id}
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blueGray-500 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <div>
          <div className="text-blueGray-700">{comment.body}</div>
          <div
            className="flex text-md text-blueGray-500"
            style={{ fontSize: 10 }}
          >
            <div>Anonymous</div>
            <span className="ml-1 mr-1">.</span>
            <div>
              <span>{moment(comment.createdAt).format('DD MMM YYYY')}</span>
            </div>
            <span className="ml-1 mr-1">.</span>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setAdd(!add)}
            >
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>{' '}
              Reply{' '}
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={add}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <CommentsInput parentId={comment.id} />
        </div>
      </Transition>
    </div>
  );
}

export default CommentListItem;
