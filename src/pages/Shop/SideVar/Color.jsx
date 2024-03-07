
const Color = ({handleColorChange}) => {
    return (
        <div className="mt-5 mx-auto">
            <h2 className="text-2xl mb-5 ml-4">Colors</h2>
            {/* All */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={""} id="All" className="" type="radio" name="color" />
                <label htmlFor="All" className="ml-4">All</label>
            </div>
            {/* Black */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={"black"} id="Black" type="radio" name="color" />
                <label htmlFor="Black" className="ml-4">Black</label>
            </div>
            {/* Blue */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={"blue"} id="Blue" type="radio" name="color" />
                <label htmlFor="Blue" className="ml-4">Blue</label>
            </div>
            {/* Red */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={"red"} id="Red" type="radio" name="color" />
                <label htmlFor="Red" className="ml-4">Red</label>
            </div>
            {/*  */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={"green"} id="Green" type="radio" name="color" />
                <label htmlFor="Green" className="ml-4">Green</label>
            </div>
            {/* White */}
            <div className="ml-4">
                <input onChange={handleColorChange} value={"white"} id="White" type="radio" name="color" />
                <label htmlFor="White" className="ml-4">White</label>
            </div>
        </div>
    );
};

export default Color;