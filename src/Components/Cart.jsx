import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cartData, setCartData }) => {
    const priceCalc = () => {
        let sum = 0;
        cartData.map((item) => {
            sum = sum + item.price;
        });
        return sum;
    }

    const handleCartData = (item) => {
        const updateCart = cartData.filter(data => item.id != data.id);
        setCartData(updateCart);
    }

    const handleProceedbtn = () => {
        setCartData([]);
    }

    return (
        <div className="w-8/12 mx-auto ">

            <h2 className="font-semibold text-xl mb-8">Your Cart</h2>
            {
                cartData.length == 0 ?
                    <div className="border-2 border-gray-200 flex justify-center items-center h-50 rounded-3xl flex-col">
                        <CiShoppingCart className="h-20 w-20 text-[#627382]"/>
                        <p className="font-xl text-[#627382]">Your Cart is Empty</p>
                    </div> :

                    <div className="grid grid-cols-1  gap-6 border-2 border-gray-200 rounded-3xl p-10">
    {
        cartData.map((item, index) => (
            <div key={index} className="flex justify-between items-center px-6 py-4 border-2 border-gray-200 rounded-2xl">
                <div className="flex gap-6 items-center">
                    <div><img src={item.icon} alt="" /></div>
                    <div className="space-y-2">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-[#627382]">${item.price}</p>
                    </div>
                </div>

                <button className="btn text-red-600"
                    onClick={() => { handleCartData(item) }}
                >Remove</button>
            </div>
        ))
    }

    <div className="flex justify-between px-6 py-4 border-2 border-gray-200 rounded-2xl">
        <p className="text-[#627382]">Total</p>
        <h2 className="font-bold">${priceCalc()}</h2>
    </div>

    <button className="bg-linear-to-r from-[#9514FA] to-[#4F39F6] w-full py-4 rounded-full text-white"
        onClick={handleProceedbtn}
    >Proceed to checkout</button>
</div>

            }
        </div>
    );
};



export default Cart;




