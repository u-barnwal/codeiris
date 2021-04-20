
export type MutationUpdateUserProfileInfoArgs = {
  data: UpdateUserInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  deleted: Scalars['Boolean'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  status: PostStatus;
  title: Scalars['String'];
  totalComments: Scalars['Int'];
  totalVotes: Scalars['Int'];
  type: PostType;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
  url: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  votes: Array<Vote>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String'];
  node: Post;
};

export type PostOrder = {
  direction: OrderDirection;
  field: PostOrderFeild;
};

export enum PostOrderFeild {
  UpdatedAt = 'updatedAt',
  Votes = 'votes'
}

export enum PostStatus {
  Blocked = 'blocked',
  Draft = 'draft',
  Hidden = 'hidden',
  Published = 'published'
}

export enum PostType {
  Ask = 'ask',
  Job = 'job',
  Link = 'link'
}

export type Query = {
  __typename?: 'Query';
  getAuth: Auth;
  getComments: CommentConnection;
  getCommentsChildren: CommentConnection;
  getMeComments: CommentConnection;
  getMePosts: PostConnection;
  getPosts: PostConnection;
  getUsers: UserConnection;
  me?: Maybe<User>;
};


export type QueryGetCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommentOrder>;
  postId?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetCommentsChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommentOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetMeCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CommentOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetMePostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrder>;
  skip?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  role: UserRole;
  status: UserStatus;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<UserEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOrder = {
  direction: OrderDirection;
  field: UserOrderField;
};

export enum UserOrderField {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  MiddleName = 'middleName'
}

export enum UserRole {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user'
}

export enum UserStatus {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive'
}

export type Vote = {
  __typename?: 'Vote';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  post: Post;
  type: VoteType;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
  user: User;
};

export enum VoteType {
  Downvotes = 'downvotes',
  Upvotes = 'upvotes'
}

export type SendMagicLinkMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendMagicLinkMutation = (
  { __typename?: 'Mutation' }
  & { sendMagicLink: (
    { __typename?: 'MagicLinkDto' }
    & Pick<MagicLinkDto, 'status' | 'listener'>
  ) }
);

export type UpdateUserProfileInfoMutationVariables = Exact<{
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
}>;


export type UpdateUserProfileInfoMutation = (
  { __typename?: 'Mutation' }
  & { updateUserProfileInfo: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CreateCommentMutationVariables = Exact<{
  postId?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  body: Scalars['String'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { CreateComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id'>
  ) }
);

export type GetPostsQueryVariables = Exact<{
  after: Scalars['String'];
  first: Scalars['Int'];
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts: (
    { __typename?: 'PostConnection' }
    & { edges?: Maybe<Array<(
      { __typename?: 'PostEdge' }
      & { node: (
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'body' | 'title' | 'updatedAt' | 'totalVotes' | 'totalComments'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'firstName' | 'lastName'>
        ) }
      ) }
    )>> }
  ) }
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'middleName' | 'role' | 'email' | 'status'>
  )> }
);

export type GetMeCommentsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeCommentsCountQuery = (
  { __typename?: 'Query' }
  & { getMeComments: (
    { __typename?: 'CommentConnection' }
    & Pick<CommentConnection, 'totalCount'>
  ) }
);

export type GetMePostsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMePostsCountQuery = (
  { __typename?: 'Query' }
  & { getMePosts: (
    { __typename?: 'PostConnection' }
    & Pick<PostConnection, 'totalCount'>
  ) }
);

export type GetCommentsQueryVariables = Exact<{
  post?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { getComments: (
    { __typename?: 'CommentConnection' }
    & Pick<CommentConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ), edges?: Maybe<Array<(
      { __typename?: 'CommentEdge' }
      & { node: (
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'body' | 'createdAt' | 'updatedAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'firstName'>
        )>, post?: Maybe<(
          { __typename?: 'Post' }
          & Pick<Post, 'id'>
        )> }
      ) }
    )>> }
  ) }
);

export type GetCommentsChildrenQueryVariables = Exact<{
  comment?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
}>;


export type GetCommentsChildrenQuery = (
  { __typename?: 'Query' }
  & { getCommentsChildren: (
    { __typename?: 'CommentConnection' }
    & Pick<CommentConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ), edges?: Maybe<Array<(
      { __typename?: 'CommentEdge' }
      & { node: (
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'body' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'firstName'>
        )> }
      ) }
    )>> }
  ) }
);


export const SendMagicLinkDocument = gql`
    mutation sendMagicLink($email: String!) {
  sendMagicLink(email: $email) {
    status
    listener
  }
}
    `;
export type SendMagicLinkMutationFn = Apollo.MutationFunction<SendMagicLinkMutation, SendMagicLinkMutationVariables>;

/**
 * __useSendMagicLinkMutation__
 *
 * To run a mutation, you first call `useSendMagicLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMagicLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMagicLinkMutation, { data, loading, error }] = useSendMagicLinkMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendMagicLinkMutation(baseOptions?: Apollo.MutationHookOptions<SendMagicLinkMutation, SendMagicLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMagicLinkMutation, SendMagicLinkMutationVariables>(SendMagicLinkDocument, options);
      }
export type SendMagicLinkMutationHookResult = ReturnType<typeof useSendMagicLinkMutation>;
export type SendMagicLinkMutationResult = Apollo.MutationResult<SendMagicLinkMutation>;
export type SendMagicLinkMutationOptions = Apollo.BaseMutationOptions<SendMagicLinkMutation, SendMagicLinkMutationVariables>;
export const UpdateUserProfileInfoDocument = gql`
    mutation updateUserProfileInfo($firstName: String, $lastName: String, $middleName: String) {
  updateUserProfileInfo(
    data: {firstName: $firstName, lastName: $lastName, middleName: $middleName}
  ) {
    id
  }
}
    `;
export type UpdateUserProfileInfoMutationFn = Apollo.MutationFunction<UpdateUserProfileInfoMutation, UpdateUserProfileInfoMutationVariables>;

/**
 * __useUpdateUserProfileInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileInfoMutation, { data, loading, error }] = useUpdateUserProfileInfoMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *   },
 * });
 */
export function useUpdateUserProfileInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileInfoMutation, UpdateUserProfileInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileInfoMutation, UpdateUserProfileInfoMutationVariables>(UpdateUserProfileInfoDocument, options);
      }
export type UpdateUserProfileInfoMutationHookResult = ReturnType<typeof useUpdateUserProfileInfoMutation>;
export type UpdateUserProfileInfoMutationResult = Apollo.MutationResult<UpdateUserProfileInfoMutation>;
export type UpdateUserProfileInfoMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileInfoMutation, UpdateUserProfileInfoMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($postId: String, $parentId: String, $body: String!) {
  CreateComment(input: {postId: $postId, parentId: $parentId, body: $body}) {
    id
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      parentId: // value for 'parentId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetPostsDocument = gql`
    query getPosts($after: String!, $first: Int!) {
  getPosts(after: $after, first: $first) {
    edges {
      node {
        id
        body
        title
        updatedAt
        user {
          firstName
          lastName
        }
        totalVotes
        totalComments
      }
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    firstName
    lastName
    middleName
    role
    email
    status
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetMeCommentsCountDocument = gql`
    query getMeCommentsCount {
  getMeComments {
    totalCount
  }
}
    `;

/**
 * __useGetMeCommentsCountQuery__
 *
 * To run a query within a React component, call `useGetMeCommentsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeCommentsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeCommentsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeCommentsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetMeCommentsCountQuery, GetMeCommentsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeCommentsCountQuery, GetMeCommentsCountQueryVariables>(GetMeCommentsCountDocument, options);
      }
export function useGetMeCommentsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeCommentsCountQuery, GetMeCommentsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeCommentsCountQuery, GetMeCommentsCountQueryVariables>(GetMeCommentsCountDocument, options);
        }
export type GetMeCommentsCountQueryHookResult = ReturnType<typeof useGetMeCommentsCountQuery>;
export type GetMeCommentsCountLazyQueryHookResult = ReturnType<typeof useGetMeCommentsCountLazyQuery>;
export type GetMeCommentsCountQueryResult = Apollo.QueryResult<GetMeCommentsCountQuery, GetMeCommentsCountQueryVariables>;
export const GetMePostsCountDocument = gql`
    query getMePostsCount {
  getMePosts {
    totalCount
  }
}
    `;

/**
 * __useGetMePostsCountQuery__
 *
 * To run a query within a React component, call `useGetMePostsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMePostsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMePostsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMePostsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetMePostsCountQuery, GetMePostsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMePostsCountQuery, GetMePostsCountQueryVariables>(GetMePostsCountDocument, options);
      }
export function useGetMePostsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMePostsCountQuery, GetMePostsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMePostsCountQuery, GetMePostsCountQueryVariables>(GetMePostsCountDocument, options);
        }
export type GetMePostsCountQueryHookResult = ReturnType<typeof useGetMePostsCountQuery>;
export type GetMePostsCountLazyQueryHookResult = ReturnType<typeof useGetMePostsCountLazyQuery>;
export type GetMePostsCountQueryResult = Apollo.QueryResult<GetMePostsCountQuery, GetMePostsCountQueryVariables>;
export const GetCommentsDocument = gql`
    query getComments($post: String, $first: Int!) {
  getComments(
    postId: $post
    first: $first
    orderBy: {direction: desc, field: createdAt}
  ) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        id
        body
        createdAt
        updatedAt
        user {
          id
          firstName
        }
        post {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      post: // value for 'post'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetCommentsChildrenDocument = gql`
    query getCommentsChildren($comment: String, $first: Int!) {
  getCommentsChildren(
    commentId: $comment
    first: $first
    orderBy: {direction: desc, field: createdAt}
  ) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        id
        body
        createdAt
        user {
          id
          firstName
        }
      }
    }
  }
}
    `;

/**
 * __useGetCommentsChildrenQuery__
 *
 * To run a query within a React component, call `useGetCommentsChildrenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsChildrenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsChildrenQuery({
 *   variables: {
 *      comment: // value for 'comment'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetCommentsChildrenQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsChildrenQuery, GetCommentsChildrenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsChildrenQuery, GetCommentsChildrenQueryVariables>(GetCommentsChildrenDocument, options);
      }
export function useGetCommentsChildrenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsChildrenQuery, GetCommentsChildrenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsChildrenQuery, GetCommentsChildrenQueryVariables>(GetCommentsChildrenDocument, options);
        }
export type GetCommentsChildrenQueryHookResult = ReturnType<typeof useGetCommentsChildrenQuery>;
export type GetCommentsChildrenLazyQueryHookResult = ReturnType<typeof useGetCommentsChildrenLazyQuery>;
export type GetCommentsChildrenQueryResult = Apollo.QueryResult<GetCommentsChildrenQuery, GetCommentsChildrenQueryVariables>;
