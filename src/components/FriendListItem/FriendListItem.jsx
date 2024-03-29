import clsx from "clsx";
import css from "./FriendListItem.module.css"

export default function FriendListItem({
    friend: {
      avatar,
      name,
      isOnline,
    },
  }) {
    return (
        <div className={css.cardWrapper}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        <p className={clsx(css.friendText, { [css.online]: isOnline, [css.offline]: !isOnline })}>{isOnline ? "Online " : "Offline"}</p>
      </div>
    );
  }