export interface PostProps {
  title?: string;
  body?: string;
  upvotes?: number;
  user?: { firstName: string; lastName: string; image: string };
}
const Post: React.FC<PostProps> = ({ title, body, upvotes, user }) => {
  return (
    <div className="flex flex-row px-5 items-center py-2 shadow-md bg-gray-100 rounded-md ">
      <div className="mr-5 ">{upvotes}</div>
      <div className=" flex flex-col">
        <div className="capitalize">{title}</div>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
      </div>
    </div>
  );
};

export default Post;
