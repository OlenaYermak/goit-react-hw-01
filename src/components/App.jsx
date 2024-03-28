import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";

import userData from "../userData.json"
import initialFriends from "../friends.json";

export default function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={initialFriends} />
    </>
  )
}
