import CharacterInner from '../../components/MainCharacter/CharacterInner';
import RandomInner from './../../components/Random/RandomInner';

const dataCharacter = [
    {
        id:1,
        img:"item.jpg",
        name:"ABYSS"
    },
    {
        id:2,
        img:"item.jpg",
        name:"ABYSS"
    },
    {
        id:3,
        img:"item.jpg",
        name:"ABYSS"
    },
    {
        id:4,
        img:"item.jpg",
        name:"ABYSS"
    },
    {
        id:5,
        img:"item.jpg",
        name:"ABYSS"
    },
    {
        id:5,
        img:"item.jpg",
        name:"ABYSS"
    },
]

export const MainPage = () => {
    return (
        <>
            <RandomInner/>
            <CharacterInner items={dataCharacter} />
        </>
    )
}