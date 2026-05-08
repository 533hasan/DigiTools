const Workflow = () => {
  return (
    <section className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready To Transform Your Workflow?
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm md:text-base text-purple-100 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Explore Products
          </button>

          <button className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-purple-700 transition duration-300">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-purple-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;