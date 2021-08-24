import loadingLogo from '../assets/loading-logo.png';

const Loading = () => (
  <div className="body loading-container d-flex">
    <img alt="loading logo" className="loading-image" src={loadingLogo} />
    <div className="overlay" />
  </div>
);

export default Loading;
