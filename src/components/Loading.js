import loadingBackground from '../assets/sean-evans-un.jpg';
import loadingLogo from '../assets/loading-logo.png';

const Loading = () => (
  <div className="body">
    <img alt="loadingbg" className="bg-image" src={loadingBackground} />
    <div className="overlay" />
    <img alt="loading logo" className="loading-image" src={loadingLogo} />
  </div>
);

export default Loading;
