import React, {useContext} from 'react';

import {CustomContext} from "../../context";
import useCategory from "../../hooks/useCategory";


interface ITypeLocation {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}


const Location = () => {
    const category = useContext(CustomContext)
    const {data , loading, error} = useCategory(category?.category, 1)
    return (
        <div>
            {error && <div>Error</div>}
            {loading ? <div>Loading...</div> :
                data.map((item: ITypeLocation) => (
                    <div>{item.name}</div>
                ) )
            }
        </div>
    );
};

export default Location;