import { use } from "react";
import Card from '../Components/Card'
const Models = ({ fetchPromise,cartData, setCartData }) => {
    const models = use(fetchPromise);

    return (
        <div className="w-11/12 mx-auto mt-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    models.map((data) => (
                        <Card key={data.id} data={data} cartData={cartData} setCartData={setCartData}></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Models;