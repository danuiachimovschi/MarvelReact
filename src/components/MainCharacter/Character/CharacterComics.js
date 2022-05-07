import { ItemCharName } from "../../../assets/helper";
import ComicsItem from "./AsideItemsComics/ComicsItem";

const CharacterComics = ({comics}) => {
    const comicsItems = comics.map(({id, name}) => {
        return <ComicsItem key={id} name={name}></ComicsItem>
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