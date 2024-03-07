import { Select, Option } from "@material-tailwind/react";


const Sort = ({ sortOrder, setSortOrder }) => {
   
    return (
        <div className="flex justify-between bg-gray-200 px-4 py-5 mb-5">
            <h1>Shop</h1>
            <div className="">
                <Select color="teal" label="Sort by" value={sortOrder} onChange={(val) => setSortOrder(val)}>
                    <Option value={"asc"}>Price: low to high</Option>
                    <Option value={"desc"}>Price: high to low</Option>
                </Select>
            </div>
        </div>
    );
};

export default Sort;