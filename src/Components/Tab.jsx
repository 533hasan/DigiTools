import React from 'react';

const Tab = ({activeTab, setActiveTab, cartData}) => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center space-y-6">
                <h2 className="font-bold text-[40px]">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>
            </div>
            <div className="my-6 tabs tabs-box w-fit mx-auto flex gap-2 p-1 rounded-full">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full h-12 min-w-[120px] ${activeTab === "product"
                        ? "text-white bg-gradient-to-r from-[#9514FA] to-[#4F39F6]"
                        : ""
                        }`}
                    aria-label="Products"
                    onClick={() => setActiveTab("product")}
                    readOnly
                />

                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full h-12 min-w-[120px] ${activeTab === "cart"
                        ? "text-white bg-gradient-to-r from-[#9514FA] to-[#4F39F6]"
                        : ""
                        }`}
                    aria-label={`carts ${cartData.length !== 0 ? `(${cartData.length})` : ""}`}
                    onClick={() => setActiveTab("cart")}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Tab;