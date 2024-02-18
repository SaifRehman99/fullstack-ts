import { UserData } from "types/user.type";

const UserListing: React.FC<{ user: UserData }> = ({ user }): JSX.Element => {
  return (
    <div className="flex mb-3 max-md:mb-2 gap-[30px] max-sm:p-[7px] p-[10px] rounded-[10px] border border-gray-300 overflow-hidden">
      <div className="avatar">
        <div className="w-2/3 max-md:w-20 max-sm:w-16 rounded-full">
          <img src={user.avatar} />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-semibold lg:text-xl max-sm:text-md">
          {user.first_name}
          {user.last_name}
        </p>
        <p className="text-slate-500 text-sm truncate">{user.email}</p>
      </div>
    </div>
  );
};

export default UserListing;
