const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-100 md:w-1/2">
        <img
          src="src/assets/hero.webp"
          alt="img"
          className="w-64 h-96 object-cover rounded-lg lg:w-full"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          <a className="link link-primary">Our</a> Story
        </h1>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          In 2023, our furniture-loving squad set out to revolutionize the
          industry with personalized solutions. Through relentless dedication,
          we've etched our name as the go-to brand known for top-notch
          craftsmanship, stellar service, and groundbreaking designs. We're not
          just redefining furniture; we're reimagining possibilities, staying
          true to our values of integrity, excellence, and keeping customers
          delighted
        </p>
      </div>
    </div>
  );
};

export default About;
