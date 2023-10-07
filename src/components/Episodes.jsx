import {FaChevronCircleDown} from "react-icons/fa";
import {useState } from "react";
import axios from "axios";

const Episodes = ({character , arrayOfepisodes}) => {

    const [episodes , setEpisodes] = useState(null);


    const getData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/episode/${arrayOfepisodes.length > 1 ? arrayOfepisodes : arrayOfepisodes[0]}`);
                setEpisodes(data);
            }catch(err){
                console.log(err)
            }    
    }

    if(arrayOfepisodes) getData()




    if(!episodes){
        return ""
    }
    return (
        <article className="col-span-7 col-start-6 bg-slate-800 mt-4 rounded-md p-3">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-white text-2xl">List of Episodes:</h1>
                <button><FaChevronCircleDown color="white"/></button>
            </div>
            <div className="flex flex-col mt-4">
                {episodes.length > 1 ? episodes.map((e , index) => {
                    return  <div key={index} className="flex justify-between items-center mt-4">
                    <p className="text-white">{e.id.toString().padStart(2 , 0)} - {e.episode} : <span className="font-bold">{e.name}</span></p>
                    <p className="bg-gray-600 text-white rounded-full p-1 px-2">{e.air_date}</p>
                </div>
                }) : <div key={episodes.id} className="flex justify-between items-center mt-4">
                <p className="text-white">{episodes.id.toString().padStart(2 , 0)} - {episodes.episode} : <span className="font-bold">{episodes.name}</span></p>
                <p className="bg-gray-600 text-white rounded-full p-1 px-2">{episodes.air_date}</p>
            </div>}
            </div>
        </article>
    );
}
 
export default Episodes;