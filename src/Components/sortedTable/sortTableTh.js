import React from 'react';
import SortSvg from "./sortSvg";

const SortTableTh = (props) => {
    return (
        <th
            className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                {props.name}
                {props.isSortable?(<SortSvg/>):(<></>)}
            </p>
        </th>
    )
}

export default SortTableTh;