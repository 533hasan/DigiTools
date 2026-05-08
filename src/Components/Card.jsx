import { FaCheck } from "react-icons/fa6";
const Card = ({ data, cartData, setCartData }) => {
    console.log(data);
    const handleCart=(data)=>{
        const isFound= cartData.find(cart=> cart.id===data.id);
        if(!isFound){
            setCartData([...cartData,data]);
        }
    }
    return (
        <div className="border-2 border-gray-200 rounded-2xl p-6 space-y-4">
            <img src={data.icon} alt="" />
            <h2 className="font-bold text-xl">{data.name}</h2>
            <p className="text-[#627382]">{data.description}</p>
            <h2><span className="font-bold ">${data.price}</span><span className="text-[#627382]">/{data.period}</span></h2>
            <div className="grid grid-cols-1 gap-2">
                {
                    data.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <FaCheck className="text-green-500 shrink-0" />
                            <p className="text-[#627382]">{feature}</p>
                        </div>
                    ))
                }
            </div>

            <button className="w-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-full py-3 text-white"
            onClick={()=>{handleCart(data)}}
            >Buy Now</button>
        </div>
    );
};



export default Card;