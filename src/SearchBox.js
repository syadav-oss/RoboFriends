import React  from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='p-2'>
            <input 
                onChange={searchChange}
                className='p-3 bg-success'
                type='search' 
                placeholder='search robots' 
            />
        </div>
    )
}
export default SearchBox;