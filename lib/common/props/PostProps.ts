import React from 'react';
import { UserProps } from './UserProps';

export interface PostProps {
  id: string;
  title?: string;
  body?: string;
  upvotes?: number;
  user?: UserProps;
  totalComments?: number;
  createdAt: string;
  upvoteState?: 'upvotes' | 'downvotes' | 'notvoted' | 'disabled';
  className?: string;
  tags?: string[];
}
