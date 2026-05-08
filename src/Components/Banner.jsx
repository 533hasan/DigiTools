import bannerImg from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-12 flex justify-center items-center gap-50">
      {/* left part */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full w-fit border border-violet-100">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          New: AI-Powered Tools Available
        </div>
        
        <h1 className="font-bold text-3xl">SuperCharge Your <br />
          <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> Digital WorkFlow</span>
        </h1>
        <p>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products</p>
        <div className="flex items-center gap-6">
          <button className="btn btn-primary rounded-full w-40">Explore More</button>
          <button className="btn btn-outline btn-primary rounded-full w-40">Primary</button>
        </div>
      </div>

      {/* right part */}
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner;