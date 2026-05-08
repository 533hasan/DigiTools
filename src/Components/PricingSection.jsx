const PricingSection = () => {
  return (
    <section className="bg-[#f5f5f7] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-[#111827]">
            Simple, Transparent Pricing
          </h1>

          <p className="mt-4 text-gray-500 text-sm">
            Choose the plan that
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md mx-1 font-semibold">
              1200 Fill × 66 Hug
            </span>
            or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Starter</h2>
              <p className="text-gray-400 mt-2">
                Perfect for getting started
              </p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold text-gray-900">
                  $0
                </span>
                <span className="text-gray-400 text-xl">/Month</span>
              </div>

              <ul className="mt-8 space-y-4 text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Access to 10 free tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Basic templates
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Community support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  1 project per month
                </li>
              </ul>
            </div>

            <button className="mt-10 w-full py-4 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-600 text-white shadow-xl scale-105">
            
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-200 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full shadow">
                Most Popular
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Pro</h2>
              <p className="text-purple-100 mt-2">
                Best for professionals
              </p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold">$29</span>
                <span className="text-purple-100 text-xl">/Month</span>
              </div>

              <ul className="mt-8 space-y-4 text-white">
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Access to all premium tools
                </li>
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Unlimited templates
                </li>
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Unlimited projects
                </li>
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Cloud sync
                </li>
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Advanced analytics
                </li>
              </ul>
            </div>

            <button className="mt-10 w-full py-4 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Enterprise
              </h2>
              <p className="text-gray-400 mt-2">
                For teams and businesses
              </p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold text-gray-900">
                  $99
                </span>
                <span className="text-gray-400 text-xl">/Month</span>
              </div>

              <ul className="mt-8 space-y-4 text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Dedicated support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  SLA guarantee
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Custom branding
                </li>
              </ul>
            </div>

            <button className="mt-10 w-full py-4 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;