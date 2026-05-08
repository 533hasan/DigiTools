import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Start = () => {
    const startData = [
        { 
            id: 1, 
            img: userImg, 
            title: "Create Account", 
            desc: "Download and start using your premium tools immediately." 
        },
        { 
            id: 2, 
            img: packageImg, 
            title: "Choose Product", 
            desc: "Browse our catalog and select the tools that fit your needs." 
        },
        { 
            id: 3, 
            img: rocketImg, 
            title: "Start Creating", 
            desc: "Download and start using your premium tools immediately." 
        }
    ];

    return (
        <section className="w-11/12 mx-auto mt-20 mb-20">
            <div className="mb-4">
                <h2 className="font-extrabold text-4xl text-center">Get Started in 3 Steps</h2>
                <p className="text-[20px] text-center text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {startData.map((item) => (
                    <div 
                        key={item.id} 
                        className="relative flex flex-col items-center text-center border-2 border-gray-100 rounded-3xl p-8 pt-12 space-y-6 transition-all hover:shadow-xl hover:border-transparent group"
                    >
                        <div className="absolute top-6 right-6">
                            <div className="flex justify-center items-center bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-full w-10 h-10 shrink-0 shadow-md">
                                <span className="font-bold text-white text-sm">
                                    {item.id.toString().padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-12 h-12 object-contain" 
                            />
                        </div>
                        
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-gray-800">
                                {item.title}
                            </h2>
                            <p className="text-[#627382] leading-relaxed max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Start;