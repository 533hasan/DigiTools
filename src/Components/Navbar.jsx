import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="shadow-[0_10px_15px_-10px_rgba(0,0,0,0.35)]">
      <div className="w-11/12 mx-auto flex items-center justify-between p-8">
        <div className="font-bold text-[40px] bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent ">DigiTools</div>
        <div>
          <ul className="flex items-center gap-8">
            <li><a href="">Product</a></li>
            <li><a href="">Fetures</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <CiShoppingCart />
          <p>Login</p>
          <button className="btn rounded-full text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;