import { PostProps } from '../../../lib/common/props/PostProps';
import Image from 'next/image';
//TODO due to build error the user part is disabled
const Post: React.FC<PostProps> = ({
  title,
  body,
  upvotes,
  totalComments,
  user,
}: PostProps) => {
  return (
    <div className="max-w-md rounded-md shadow-lg mx-auto bg-white">
      <Image
        className="w-full max-h-6"
        src={`https://images.unsplash.com/photo-1618411610011-fb3b7695a765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80`}
        alt="WildPhoto"
        layout="responsive"
        width="200"
        height="auto"
      />
      <div className="p-5 flex flex-row align-middle">
        <div className="mr-5 self-center text-heading-light">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
          <div className="text-center">{upvotes}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="font-bold text-xl mb-2 text-heading-dark capitalize text-center">
            {title}
          </div>
          <div
            className="text-base text-body-dark"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="flex flex-row my-4 justify-between">
            <div className="flex flex-row">
              <div className="w-10 h-10 rounded-full text-body-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-base text-body">
                {user.firstName + ' ' + user.lastName}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-10 h-10 rounded-full text-body-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div className="text-base text-body">{totalComments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
