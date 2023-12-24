import { Link } from 'react-router-dom';
import hero7 from '../assets/hero7.webp';

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bond tracking-tight sm:text-6xl">
          We change the way you design your home!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-9">
          Transform your space into a reflection of <strong>YOU</strong>! Our
          expert team is dedicated to making your home or office uniquely{' '}
          <strong>YOU</strong>, guiding you through every step of the way.
        </p>
        <div className="mt-10">
          <Link to="/Products" className="btn btn-primary">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="hidden h-[35rem] lg:carousel carousel-end space-x-2 rounded-box">
        <div className="carousel-item active">
          <img src={hero7} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
