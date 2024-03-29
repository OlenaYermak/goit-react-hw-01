
import css from "./Profile.module.css";
export default function Profile ({ name, tag, location, image, stats }){
  
    return (
      
        <div className={css.container}>
  <div className={css.imgTextWrapper}>
  <img className={css.profileImg} src={image} alt="User avatar" />
    <p className={css.profileName}>{name} </p>
    <p className={css.profileTag}>@{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.dataList}>
    <li className={css.dataListItem}>
      <span className={css.profileText}>Followers</span>
      <span className={css.profileDataText}>{stats.followers}</span>
    </li>
    <li className={css.dataListItem}>
      <span className={css.profileText}>Views</span>
      <span className={css.profileDataText}>{stats.views}</span>
    </li>
    <li className={css.dataListItem}>
      <span className={css.profileText}>Likes</span>
      <span className={css.profileDataText}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}