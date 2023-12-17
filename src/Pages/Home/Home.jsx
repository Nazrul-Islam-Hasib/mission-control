import { Player } from '@lottiefiles/react-lottie-player';
import space_animation from '../../assets/space_animation.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <Player
                        autoplay
                        loop
                        src={space_animation}
                        style={{ height: '500px', width: '500px' }}
                    >
                    </Player>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Mission control!</h1>
                    <p className="py-6">Get the status of latest Spectrum data</p>
                    <button className="btn btn-primary mr-1">
                        <Link to='/status'>Status</Link>
                    </button>
                    <button className="btn btn-primary ml-1">
                        <Link to='/statusLive'>Status Live</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
