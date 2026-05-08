import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="px-20 lg:px-50 py-20 bg-[#101727] flex flex-col">
            <div className="flex flex-wrap justify-between gap-10">
                <div className="text-white space-y-6 max-w-sm">
                    <h2 className="font-bold text-[40px]">DigiTools</h2>
                    <p className="text-gray-400">
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className="text-white space-y-6">
                    <h2 className="font-bold text-[28px]">Product</h2>
                    <ul className="space-y-4 text-gray-400">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className="text-white space-y-6">
                    <h2 className="font-bold text-[28px]">Company</h2>
                    <ul className="space-y-4 text-gray-400">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className="text-white space-y-6">
                    <h2 className="font-bold text-[28px]">Resources</h2>
                    <ul className="space-y-4 text-gray-400">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="text-white space-y-6">
                    <h2 className="font-bold text-[28px]">Social Links</h2>
                    <div className="flex gap-4">
                        <CiFacebook className="h-8 w-8 cursor-pointer hover:text-blue-500 transition-colors" />
                        <CiInstagram className="h-8 w-8 cursor-pointer hover:text-pink-500 transition-colors" />
                        <CiLinkedin className="h-8 w-8 cursor-pointer hover:text-blue-400 transition-colors" />
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-800 text-[#FAFAFA] flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; 2026 Digitools. All rights reserved.</p>

                <div className="flex gap-6">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:underline">Terms of Service</p>
                    <p className="cursor-pointer hover:underline">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;