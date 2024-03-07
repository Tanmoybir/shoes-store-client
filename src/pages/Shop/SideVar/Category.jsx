
const Category = ({ handleChange }) => {
    return (
        <div className="mt-5 mx-auto">
            <h2 className="text-2xl mb-5 ml-4">Category</h2>
            {/* All */}
            <div className="ml-4">
                <input onChange={handleChange} value={""} id="All" className="" type="radio" name="category" />
                <label htmlFor="All" className="ml-4">All</label>
            </div>
            {/* Sneakers */}
            <div className="ml-4">
                <input onChange={handleChange} value={"sneakers"} id="Sneakers" type="radio" name="category" />
                <label htmlFor="Sneakers" className="ml-4">Sneakers</label>
            </div>
            {/* Flats */}
            <div className="ml-4">
                <input onChange={handleChange} value={"flats"} id="Flats" type="radio" name="category" />
                <label htmlFor="Flats" className="ml-4">Flats</label>
            </div>
            {/* Sandals */}
            <div className="ml-4">
                <input onChange={handleChange} value={"sandals"} id="Sandals" type="radio" name="category" />
                <label htmlFor="Sandals" className="ml-4">Sandals</label>
            </div>
            {/*  */}
            <div className="ml-4">
                <input onChange={handleChange} value={"heels"} id="Heels" type="radio" name="category" />
                <label htmlFor="Heels" className="ml-4">Heels</label>
            </div>

            {/* <div>
          <label className="block relative cursor-pointer select-none mb-12">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test"
              className="absolute opacity-0 cursor-pointer"
            />
            <span className="absolute top-0 left-0 h-5 w-5 bg-gray-300 rounded-full"></span>All
          </label>
          <Input
            handleChange={handleChange}
            type="radio"
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div> */}
        </div>
    );
};

export default Category;