import Heading, { HeadingSize } from '../atomic/typography';
import Router from 'next/router';
import { useQuery } from '@apollo/client';
import { GetMeDocument } from '../../../gql';
import { getAccessToken, skipper } from '../../../lib/accessToken';
import Spinner from '../atomic/spinner';
import { SpinnerSize } from '../../../lib/common/props/SpinnerProps';

function Header() {
  const { data, loading } = useQuery(GetMeDocument, { skip: skipper() });

  return (
    <div>
      <div className="relative bg-white">
        <div className="px-10 px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <Heading size={HeadingSize.H600} className="text-primary">
                  Codeiris
                </Heading>
              </a>
            </div>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              {loading && (
                <Spinner color="text-primary" size={SpinnerSize.small} />
              )}
              {!data && !loading && (
                <a
                  href="javascript:;"
                  onClick={() => Router.push('/login')}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
