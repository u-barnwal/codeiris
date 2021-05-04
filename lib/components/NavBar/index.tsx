import Container from 'lib/components/atomic/containers/Container';
import React, { useEffect } from 'react';
import Button from '../atomic/button';
import { BellIcon } from '../Icons';
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import { useQuery } from '@apollo/client';
import { GetMeDocument, GetMeQuery, GetMeQueryVariables } from '../../../gql';
import { logout, skipper } from '../../accessToken';
import useStore from '../../../store/StoreProvider';
import Router from 'next/router';
import Spinner from '../atomic/spinner';
import { SpinnerSize } from '../../common/props/SpinnerProps';
import Dropdown from '../atomic/dropdown/Dropdown';
import Avatar from '../atomic/avatar/Avatar';
import LinkButton from '../Shared/LinkButton';

function NavBar() {
  const store = useStore();

  const { data, loading, error } = useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    { skip: skipper() },
  );

  useEffect(() => {
    if (data && !store.user) {
      store.login(data.me);
    }
  }, [data]);

  const onTriggerLogout = () => {
    localStorage.clear();
    logout();
    Router.push('/');
  };

  return (
    <div className="bg-white shadow-lg">
      <Container className="py-5">
        <div className="flex items-center">
          <NavItem href="/posts">Posts</NavItem>
          <NavItem href="/questions">Questions</NavItem>
          <NavItem href="/jobs">Jobs</NavItem>

          <div className="flex-1"></div>

          <SearchBar className="mr-5" />

          <BellIcon className="mr-5" />

          <div>
            {loading && (
              <Spinner color="text-primary" size={SpinnerSize.small} />
            )}
            {(!data || data.me === null) && !loading && (
              <Button
                className="rounded-full px-10 shadow-lg"
                onClick={() => Router.push('/login')}
              >
                Login
              </Button>
            )}
            {data && data.me !== null && (
              <Dropdown
                menu={[
                  <a
                    href="javascript:;"
                    onClick={() => Router.push('/user/account')}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>,
                  <a
                    href="javascript:;"
                    onClick={() => Router.push('/user/profile')}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Profile
                  </a>,
                  <a
                    href="javascript:;"
                    onClick={onTriggerLogout}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Logout
                  </a>,
                ]}
              >
                <Avatar label={data.me.firstName} />
              </Dropdown>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
