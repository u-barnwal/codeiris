import { UserProps } from './UserProps';

export interface PostProps {
  title?: string;
  body?: string;
  upvotes?: number;
  user?: UserProps;
}
