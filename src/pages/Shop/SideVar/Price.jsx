
const Price = ({handlePriceChange}) => {
    return (
        <div className="mt-5 mx-auto">
            <h2 className="text-2xl mb-5 ml-4">Price</h2>
            {/* All */}
            <div className="ml-4">
                <input onChange={handlePriceChange} value={""} id="All" className="" type="radio" name="price" />
                <label htmlFor="All" className="ml-4">All</label>
            </div>
            {/* Black */}
            <div className="ml-4">
                <input onChange={handlePriceChange} value={50} id="Black" type="radio" name="price" />
                <label htmlFor="Black" className="ml-4">$0 - $50</label>
            </div>
            {/* Blue */}
            <div className="ml-4">
                <input onChange={handlePriceChange} value={100} id="Blue" type="radio" name="price" />
                <label htmlFor="Blue" className="ml-4">$50 - $100</label>
            </div>
            {/* Red */}
            <div className="ml-4">
                <input onChange={handlePriceChange} value={150} id="Red" type="radio" name="price" />
                <label htmlFor="Red" className="ml-4">$100 - $150</label>
            </div>
            {/*  */}
            <div className="ml-4">
                <input onChange={handlePriceChange} value={150} id="Green" type="radio" name="price" />
                <label htmlFor="Green" className="ml-4">Over $150</label>
            </div>
        </div>
    );
};

export default Price;