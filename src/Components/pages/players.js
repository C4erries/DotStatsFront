import React, {useContext, useEffect, useState} from 'react';
import SortedTable from "../sortedTable/sortedTable";
import axios from "axios";
import {AuthApi} from "../../AuthApi";

const edit = <div className="p-4 border-b border-blue-gray-50">
    <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                     className="w-4 h-4">
                  <path
                      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                  </path>
                </svg>
              </span>
    </button>
</div>
const createCard =(firstName, secondName, matches, wins, isOnline)=>{
    const td1  = <div className="p-4 border-b border-blue-gray-50">
        <div className="h-10 flex items-center gap-3">
            <img
                src="https://loremflickr.com/64/64"
                alt=""
                className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"/>
            <div className="flex flex-col">
                <a href={"/player/"+firstName}>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {firstName}
                    </p>
                </a>
                <p
                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                    {secondName}
                </p>
            </div>
        </div>
    </div>
    const td2  = <div className="p-4 border-b border-blue-gray-50">
        <div className="h-10 items-center flex">
            <p>{matches}</p>
        </div>
    </div>
    const td3  = <div className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center h-10">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {(wins/matches*100).toFixed(2)}%
            </p>
        </div>
    </div>
    const td4  = <div className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center h-10 w-max">
            <div
                className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                <span className="">{isOnline?("online"):("offline")}</span>
            </div>
        </div>
    </div>
    return [td1, td2, td3, td4, edit]
}
const filter = (searchText, playersList) => {
    if(!searchText)
        return playersList;
    return playersList.filter(value => value.firstName.toLowerCase().includes(searchText.toLowerCase()))
}
const amountStep = 10;
const Players = () => {
    const throwErr = useContext(AuthApi).throwErr
    const [amount, setAmount] = useState(amountStep);
    const [playersList, setPlayersList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(()=>{
        const Debounce = setTimeout(()=>{
            const temp = []
            const filtered = filter(searchText, playersList)
            filtered.map(value => {
                temp.push(createCard(value.firstName, value.secondName, value.matches, value.wins, value.isOnline))
            })
            setFilteredList(temp)
        }, 1)
        return ()=>clearTimeout(Debounce)
    }, [searchText, playersList])
    const middleware = (data) =>{
        const temp = []
        setPlayersList(playersList.concat(data))
    }
    const handleAdd = () => {
            axios
                .get('http://localhost:8080/players?a='+(amount-amountStep).toString()+'&b='+(amount).toString())
                .then(res => res.data)
                .then(json => middleware(json))
                .catch(err => throwErr(err))
        setAmount(amount+amountStep)
    }
    useEffect(()=>handleAdd(),[])

    const list = [{name: "Player", isSortable: false}, {name: "Matches played", isSortable: true}, {name: "WR", isSortable: true}, {name: "isOnline", isSortable: true}]
    const header = <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                    <div
                        className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                    </div>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "/>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Player
                    </label>
                </div>
            </div>
        </div>
    </div>
    const footer = <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Page 1 of 10
        </p>
        <div className="flex gap-2">
            <button
                className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Previous
            </button>
            <button onClick={handleAdd}
                className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Next
            </button>
        </div>
    </div>

    return <div className="p-10"><SortedTable header={header} footer={footer} list={list} tbody={filteredList} /></div>
}

export default Players;