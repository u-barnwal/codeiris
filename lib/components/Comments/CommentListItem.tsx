import moment from 'moment';
import { useState } from 'react';
import CommentsInput from './CommentsInput';
import { Transition } from '@headlessui/react';
import { useQuery } from '@apollo/client';
import {
  GetCommentsChildrenDocument,
  GetCommentsChildrenQuery,
  GetCommentsChildrenQueryVariables,
} from '../../../gql';
import Spinner from '../atomic/spinner';
import { SpinnerSize } from '../../common/props/SpinnerProps';
import clsx from 'clsx';
import Button from '../atomic/button';
import { MessageIcon } from '../Icons';

interface CommentListItemProps {
  comment: any;
  child: boolean;
}

function CommentListItem({ comment, child }: CommentListItemProps) {
  const [add, setAdd] = useState(false);
  const [first, setFirst] = useState(1);
  const { data, loading, error } = useQuery<
    GetCommentsChildrenQuery,
    GetCommentsChildrenQueryVariables
  >(GetCommentsChildrenDocument, {
    variables: { comment: child ? comment.id : undefined, first },
    skip: !child,
    pollInterval: 3000,
  });

  if (comment === undefined) {
    return <div />;
  }

  console.log(data);

  return (
    <div
      className="w-full rounded-lg overflow-hidden p-2 bg-white"
      key={comment.id}
    >
      <div className="flex items-start">
        <MessageIcon className="mr-4" color="#60606c" />

        <div>
          <div className="text-blueGray-700">{comment.body}</div>

          <div
            className="flex text-md text-blueGray-500"
            style={{ fontSize: 10 }}
          >
            {comment.user ? (
              <div>{comment.user.firstName}</div>
            ) : (
              <div>Anonymous</div>
            )}
            <span className="ml-1 mr-1">.</span>
            <div>
              <span>
                {moment(comment.createdAt).format('DD MMM YYYY: HH:mm')}
              </span>
            </div>
            <span className="ml-1 mr-1">.</span>
            {child && (
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setAdd(!add)}
              >
                <MessageIcon className="mx-2" color="#60606c" size={4} />
                Reply{' '}
              </div>
            )}
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
        <div className="ml-10 mt-2 mb-5">
          <CommentsInput parentId={comment.id} />
        </div>
      </Transition>

      {loading && (
        <div className="flex justify-center items-center">
          <Spinner size={SpinnerSize.small} />
        </div>
      )}

      {data && data.getCommentsChildren.edges.length > 0 && (
        <div className="md:ml-10">
          {data.getCommentsChildren.edges.map((childcomments) => (
            <CommentListItem
              comment={childcomments.node}
              child={false}
              key={childcomments.node.id}
            />
          ))}
        </div>
      )}

      {data && data.getCommentsChildren.totalCount > first && (
        <div className="flex justify-center items-center">
          <Button
            loading={loading}
            disabled={loading}
            className="bg-white text-blueGray-500"
            loaderClass="bg-primary"
            onClick={() => {
              if (
                data.getCommentsChildren.totalCount + 10 >
                data.getCommentsChildren.totalCount
              )
                setFirst(first + 10);
              else setFirst(data.getCommentsChildren.totalCount);
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default CommentListItem;
