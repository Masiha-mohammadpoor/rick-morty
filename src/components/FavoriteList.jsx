import {FaTrashAlt} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";

const Character = ({name , status , species , image , gender , deleteFavorite}) => {
    return ( 
        <div className="bg-slate-800 flex items-center p-3 mt-3 rounded-md">
            <div>
                <img className="w-16 h-16 rounded-md" src={image} alt={name} />
            </div>
            <div className="flex-1 pl-4 h-16 flex flex-col justify-between">
                <p className="text-white">{gender === "Male" ? "👦🏼" : "👩🏼"} {name}</p>
                <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full ${status === "Alive" ? "bg-green-500" : status === "Dead" ? "bg-red-600" : "bg-blue-600"} mr-2`}></span>
                    <p className="text-white">{status} - {species}</p>
                </div>
            </div>
            <button className="cursor-pointer" onClick={deleteFavorite}>
                <FaTrashAlt size="18" color="red"/>
            </button>
        </div>
    );
}


const FavoriteList = ({favorite , openHandler,  isOpen , deleteFavorite}) => {
    return (
        <article style={{backgroundColor: "rgba(47, 46, 46, 0.724)"}} className={`w-screen bg-slate-600 h-screen p-3 ${isOpen ? "flex fixed" : "none"} justify-center items-center top-0 right-0 left-0`}>
            <div className="w-96 h-60 overflow-y-scroll p-3 rounded-md fixed bg-gray-700">
            <div className="h-8 w-full flex justify-between items-center">
            <h1 className="text-white text-xl">Favorite List</h1>
            <button onClick={openHandler} className="rotate-45 text-red-600"><FaPlus/></button>
            </div>

                {favorite.length >= 1 ?favorite.map(c => {
                    return <Character
                    key={c.id}
                    name={c.name}
                    status={c.status}
                    species={c.species}
                    image={c.image}
                    gender={c.gender}
                    deleteFavorite={() => deleteFavorite(c.id)}
                    />
                }) : <p className="text-center mt-3 text-red-600">There are no favorites!!!</p>}
            </div>
        </article>
    )
}

export default FavoriteList;
