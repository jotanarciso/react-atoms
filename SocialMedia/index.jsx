import InstagramIcon from "../../../assets/svg/instagram.svg";
import FacebookIcon from "../../../assets/svg/facebook.svg";
import LinkedinIcon from "../../../assets/svg/linkedin.svg";
import YoutubeIcon from "../../../assets/svg/youtube.svg";
function SocialMedia(props) {
  const { instagram, facebook, linkedin, youtube, primary, spacing } = props;
  return (
    <div
      className={`social-media ${primary ? "primary" : ""} ${
        spacing ? "spacing" : ""
      }`}
    >
      <a href={`https://instagram.com/${instagram}`}>
        <InstagramIcon />
      </a>
      <a href={`https://facebook.com/${facebook}`}>
        <FacebookIcon />
      </a>
      <a href={`https://linkedin.com/in/${linkedin}`}>
        <LinkedinIcon />
      </a>
      <a href={`https://youtube.com/${youtube}`}>
        <YoutubeIcon />
      </a>
    </div>
  );
}

export default SocialMedia;
