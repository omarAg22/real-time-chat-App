const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-900 rounded p-2 py-a cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="font-bold text-gray-100">Omar Agtib</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1 " />
    </>
  );
};

export default Conversation;
