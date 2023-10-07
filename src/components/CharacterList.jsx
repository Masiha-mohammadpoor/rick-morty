import {FaEye} from "react-icons/fa";

const Character = ({name , status , species , image , gender , clickHandler}) => {
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
            <a className="cursor-pointer" href="#nav" onClick={clickHandler}>
                <FaEye size="18" color="red"/>
            </a>
        </div>
    );
}

const CharacterList = ({characters , viewCharacter}) => {

    const renderComponent = () => {
        if(characters) {
            return characters.map(c => {
                return <Character 
                key={c.id} 
                name={c.name} 
                status={c.status} 
                species={c.species} 
                image={c.image}
                gender={c.gender}
                clickHandler={() => viewCharacter(c.id)}
                />
            })
        }
        return <p className="text-white w-full text-center">Loding...</p>
    }

    return ( 
        <article className="col-span-5 mt-6 ml-3">
            {renderComponent()}
        </article>
    );
}
 
export default CharacterList;

 
