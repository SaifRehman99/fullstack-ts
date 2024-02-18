import { UserData } from "@/types/user.type";

const UserListing: React.FC<{ user: UserData }> = ({ user }): JSX.Element => {
  return (
    <div className="flex gap-6 mb-8 justify-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
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
