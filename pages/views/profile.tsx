import DefaultLayout from '../layouts/defaultLayout';
import React from 'react';
import { useQuery } from '@apollo/client';
import {
  GetMeCommentsCountDocument,
  GetMeCommentsCountQuery,
  GetMeCommentsCountQueryVariables,
  GetMeDocument,
  GetMePostsCountDocument,
  GetMePostsCountQuery,
  GetMePostsCountQueryVariables,
  GetMeQuery,
  GetMeQueryVariables,
} from '../../gql';
import { skipper } from '../../lib/accessToken';
import Spinner from '../../lib/components/atomic/spinner';
import { SpinnerSize } from '../../lib/common/props/SpinnerProps';
import Avatar from 'lib/components/atomic/avatar/Avatar';
import Container from 'lib/components/atomic/containers/Container';
import Tag from 'lib/components/Shared/Tag';
import Animation from 'lib/components/Shared/Animation';

import animationComment from './../static/animations/comment.json';
import animationDocument from './../static/animations/document.json';

function Profile() {
  const { data, loading } = useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    { skip: skipper() },
  );

  const { ...commentCount } = useQuery<
    GetMeCommentsCountQuery,
    GetMeCommentsCountQueryVariables
  >(GetMeCommentsCountDocument, { skip: skipper() });

  const { ...postCount } = useQuery<
    GetMePostsCountQuery,
    GetMePostsCountQueryVariables
  >(GetMePostsCountDocument, { skip: skipper() });

  return (
    <div>
      {loading && (
        <div className="h-full flex justify-center items-center mt-40">
          <Spinner size={SpinnerSize.large} />
        </div>
      )}

      {data && (
        <Container>
          <div className="mt-40 bg-white w-2/3 m-auto rounded-lg p-5 relative shadow-lg">
            <Avatar
              size="large"
              label={data.me.firstName[0]}
              className="absolute top-0 left-0 shadow-md"
              style={{ marginTop: '-2em', marginLeft: '2em' }}
            />

            <div className="ml-28 text-xl font-semibold">
              {data.me.firstName} {data.me.lastName}
            </div>

            <div className="mt-10 flex">
              <div className="flex-1 inline-block">
                <div className="mb-3 text-xs">FAVORITE TAGS</div>

                {/* // TODO: @risha load tags from top posts */}
                <Tag>Tech</Tag>
                <Tag>IT</Tag>
                <Tag>Code</Tag>
              </div>

              <div className="flex-1 inline-block pl-5">
                <div className="mb-3 text-xs text-right">STATS</div>

                <div className="bg-gray-100 py-3 rounded-lg flex">
                  {[
                    [
                      'Posts',
                      postCount.data.getMePosts.totalCount,
                      animationDocument,
                    ],
                    [
                      'Comments',
                      commentCount.data.getMeComments.totalCount,
                      animationComment,
                    ],
                  ].map((t, index) => (
                    <div
                      className="flex-1 text-right flex items-center mx-5"
                      key={index}
                    >
                      <Animation
                        data={t[2]}
                        height={48}
                        width={48}
                        loop={true}
                      />

                      <div className="flex-1"></div>

                      <div>
                        <div className="text-2xl font-semibold">{t[1]}</div>
                        <div className="text-sm">{t[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

Profile.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Profile;
