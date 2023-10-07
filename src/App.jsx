import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import CharacterDetail from "./components/CharacterDetail";
import Episodes from "./components/Episodes";
import FavoriteList from "./components/FavoriteList";
import {useState , useEffect} from "react";
import axios from "axios";
import _ from "lodash";



const App = () => {

  const [characters , setCharacters] = useState(null);
  const [filterCharacters , setFilterCharacters] = useState(null);
  const [character , setCharacter] = useState(null);
  const [search , setSearch] = useState("")
  const [favorite , setFavorite] = useState([]);
  const [isOpen , setIsOpen] = useState(false);
  const arrayOfepisodes = character && _.compact([...character.episode.slice(0,6)].map(c => {return c.slice(40)}));



  useEffect(() => {
      const getData = async () => {
          try{
              const {data : {results}} = await axios.get("https://rickandmortyapi.com/api/character");
              setCharacters(results)
          }catch(err){
              console.error(err)
          }
      }
      getData();
  },[])


  const viewCharacterHandler = async (id) => {
    try{
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(data)
    }catch(err){
      console.error(err);
    }
  }

  const likeHandler = (character) => {
    const favoriteCharacter = favorite.find(c => c.id === character.id);
    
    if(favoriteCharacter){
      return ""
    }
    setFavorite(prev => [...prev , character]);
  }

  const deleteFavoriteHandler = (id) => {
    console.log(id)
    const filteredFavoriteCharacter = favorite.filter(c => c.id !== id);
    setFavorite(filteredFavoriteCharacter);
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const searchValue = e.target.value.trim().toLowerCase();
    const filteredCharactersBySearch = characters.filter(item => item.name.toLowerCase().includes(searchValue))
    setFilterCharacters(filteredCharactersBySearch);
  }


  return (
    <div>
      <Navbar characterCount={characters && characters.length} favorite={favorite.length} openHandler={() => favorite.length   >=  1 && setIsOpen(true)} searchHandler={searchHandler}/>
      <section className="grid grid-cols-12 gap-x-4">
        <CharacterList characters={search ? filterCharacters : characters} viewCharacter={viewCharacterHandler}/>
        <section className="md:col-span-7 col-san-12 mt-9">
        <CharacterDetail character={character} likeHandler={likeHandler}/>
        <Episodes character={character} arrayOfepisodes={arrayOfepisodes}/>
        </section>
        {isOpen && <FavoriteList 
        favorite={favorite} 
        openHandler={() => setIsOpen(false)}
        deleteFavorite={deleteFavoriteHandler}
        isOpen={isOpen}/> }
        </section>
    </div>
  )
}

export default App;