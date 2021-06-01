import FollowAt from "react-social-media-follow";

const links = [
      'https://twitter.com',
      'https://www.facebook.com',
      'https://www.youtube.com',
      'https://www.instagram.com',
    ];

const Social = () => {
  return (
    <FollowAt links = {links}/>
  );
}
export default Social;
