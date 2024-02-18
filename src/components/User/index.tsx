import UserListing from "./UserListing";
import ErrorPage from "../ErrorPage";
import NotFound from "../NotFound";
import { ApiData, UserData } from "@/types/user.type";
import useApiRequest from "../../hooks/useApiRequest";
import useLoader from "../../hooks/useLoader";
import Pulse from "../Pulse";

const User: React.FC<{}> = ({}): JSX.Element => {
  const { data: users, isLoading: usersLoading, error: usersError } = useApiRequest<ApiData>("");
  const loading = useLoader(10);

  if (loading || usersLoading) {
    return <Pulse />;
  }

  if (usersError) {
    return <ErrorPage buttonLink="/" text={usersError} buttonText="Load Page" />;
  }

  return (
    <div className="mt-12">
      <h1 className="font-bold text-center text-5xl mb-[40px]">Users</h1>
      <div className="max-w-md mx-auto">
        <div className="overflow-y-auto max-h-[75vh] p-4">
          {users?.data?.length ? (
            users?.data?.map((user: UserData, index: number) => <UserListing key={index} user={user} />)
          ) : (
            <NotFound text="Something went wrong" height={100} width={100} />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
