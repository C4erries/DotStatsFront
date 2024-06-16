import {useEffect, useState} from "react";

const Table = () =>{
    const [data, setData] = useState([])
    const createCard = (json) => {
        setData(json)
    }




    useEffect(()=>{
        fetch('http://localhost:8080/stats/wr')
            .then(res => res.json())
            .then(json => createCard(json))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='border bg-amber-50'>
            {data.length?(data.map((value, id) =>
                    <div className="items-center flex" key={id}>
                        <div className="inline-block pl-10"><img className="block h-10 w-14" src={value.ImageUrl} /></div>
                        <div className="inline-block pl-10">Name: {value.Name} </div>
                        <div className="inline-block pl-10">Pickrate: {value.Pickrate} </div>
                        <div className="inline-block pl-10">Winrate: {value.Winrate} </div>
                    </div>)
            ):(
                <h4>Nothing</h4>
            )}

        </div>
    )



}
export default Table