import { ItemCharName } from "../../../assets/helper";
import ComicsItem from "./AsideItemsComics/ComicsItem";

const CharacterComics = ({comics}) => {
    const comicsItems = comics.map(({name}, index) => {
        return <ComicsItem key={index} name={name}></ComicsItem>
    }) 
    return ( 
        <>
            <ItemCharName black className="mb-10">
                Comics:
            </ItemCharName>
            {comicsItems}
        </>
    );
}
 
export default CharacterComics;