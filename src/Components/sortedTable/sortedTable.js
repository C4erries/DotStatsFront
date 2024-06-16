import React from 'react';
import SortTableTh from "./sortTableTh";

const SortedTable = (props) => {
        return (
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                {props.header}
                <div className="p-6 px-0 overflow-scroll">
                    <table className="w-full mt-4 text-left table-auto min-w-max">
                        <thead>
                        <tr>{props.list.map((value, id) => <SortTableTh key={id} name={value.name} isSortable={value.isSortable}/>)}</tr>
                        </thead>
                        <tbody>
                        {
                            props.tbody.map((trVal, trId) =>
                                    <tr key={trId}>
                                        {trVal.map((tdVal, tdId) => <td key={tdId}>{tdVal}</td>)}
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                {props.footer}
            </div>
        );
}

export default SortedTable;