import React from 'react';
import { UserProps } from './UserProps';

export interface PostProps {
  id?: string;
  title?: string;
  body?: string;
  upvotes?: number;
  user?: any;
  totalComments?: number;
  updatedAt?: string;
  upvoteState?: 'upvotes' | 'downvotes' | 'notvoted' | 'disabled';
  className?: string;
  tags?: any[];
  type?: string;
}
