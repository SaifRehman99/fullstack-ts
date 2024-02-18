import UserListing from "components/User/UserListing";
import ErrorPage from "components/ErrorPage";
import NotFound from "components/NotFound";
import InfiniteScrollComponent from "components/shared/InfiniteComponent";
import { ApiData, UserData } from "types/user.type";
import useApiRequest from "hooks/useApiRequest";
import useLoader from "hooks/useLoader";
import Pulse from "components/shared/Pulse";
import { useEffect, useState } from "react";
import { LOADING_DURATION, PER_PAGE } from "constants/index";

const User: React.FC<{}> = ({}): JSX.Element => {
  // Components States Below
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);

  // hooks below [API call, Custom Loader]
  const { data: users, isLoading: usersLoading, error: usersError } = useApiRequest<ApiData>(`?page=${currentPage}&per_page=${PER_PAGE}`);
  const loading = useLoader(LOADING_DURATION);

  // Handler for next api call
  const loadNextUser = () => setCurrentPage((prevPage) => prevPage + 1);

  // Append new users to the existing user data
  useEffect(() => {
    if (users?.data.length) {
      setAllUsers((prevUsers) => [...prevUsers, ...users.data]);
    }
  }, [users?.data.length]);

  // Loading Component Pulse
  if (loading) {
    return <Pulse />;
  }

  // Error Component Page
  if (usersError) {
    return <ErrorPage buttonLink="/" text={usersError} buttonText="Load Page" />;
  }

  return (
    <div className="mt-12">
      <h1 className="font-bold text-center text-4xl max-md:text-3xl max-sm:text-2xl lg:mb-[40px]">Users</h1>
      <div className="lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-xs mx-auto">
        <div className="lg:max-h-[85vh] md:max-h-[75vh] sm:max-h-[70vh] xs:max-h-[65vh] p-4">
          {/* Infinite Scroll Component Starts Here*/}
          <div id="scrollableDiv" className="lg:h-[85vh]">
            <InfiniteScrollComponent currentPage={users?.page as number} totalPage={users?.total_pages as number} loading={usersLoading} loadMore={loadNextUser} data={allUsers} endMessageText="You have seen it all!">
              {/* User Listing Component Below */}
              {allUsers?.length ? allUsers?.map((user: UserData, index: number) => <UserListing key={index} user={user} />) : <NotFound text="Something went wrong" height={100} width={100} />}
            </InfiniteScrollComponent>
          </div>
          {/* Infinite Scroll Components Ends Here */}
        </div>
      </div>
    </div>
  );
};

export default User;
