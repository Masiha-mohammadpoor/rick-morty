import {character} from "../../data";
import {FaRegHeart , FaHeart} from "react-icons/fa"

const CharacterDetail = ({character , likeHandler}) => {

    if(!character) {
        return <p className="text-white w-full text-center">please select a character!!!</p>
    }
    return (
        <article className="flex h-48 bg-slate-800 rounded-md w-full mr-3">
            <div>
                <img src={character.image} alt={character.name} className="h-full rounded-l-md"/>
            </div>
            <div className="py-4 px-4 h-full flex flex-col justify-between items-start">
                <div>
                <div>
                    <p className="text-white">{character.gender === "Male" ? "👦🏼" : "👩🏼"} {character.name}</p>
                </div>
                <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full ${character.status === "Alive" ? "bg-green-500" : character.status === "Dead" ? "bg-red-600" : "bg-blue-600"} mr-2`}></span>
                    <p className="text-white">{character.status} - {character.species}</p>
                </div>
                </div>
                <div>
                    <p className="text-gray-600">Last know location</p>
                    <p className="font-bold text-white">{character.location.name}</p>
                </div>
                <button onClick={() => likeHandler(character)} className="text-white bg-gray-600 rounded-md px-3 py-2 flex justify-between items-center">Add To Favorite <FaRegHeart color="red" className="ml-2"/></button>
            </div>
        </article>
    );
}
 
export default CharacterDetail;