import { UserData } from "types/user.type";

const UserListing: React.FC<{ user: UserData }> = ({ user }): JSX.Element => {
  return (
    <div className="flex mb-8 justify-around">
      <div className="avatar">
        <div className="max-2xl:w-28 max-xl:w-20 max-lg:w-20 max-md:w-20 max-sm:w-16 rounded-full">
          <img src={user.avatar} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-semibold">
          {user.first_name}
          {user.last_name}
        </p>
        <p className="text-slate-500 text-sm">{user.email}</p>
      </div>
    </div>
  );
};

export default UserListing;
