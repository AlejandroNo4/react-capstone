import loadingLogo from '../assets/loading-logo.png';

const Loading = () => (
  <div className="body loading-container d-flex align-center justify-center">
    <img alt="loading logo" className="loading-image" src={loadingLogo} data-testid="imgy" />
    <div className="overlay" />
  </div>
);

export default Loading;
