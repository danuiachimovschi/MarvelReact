import styled from 'styled-components';
import { FlexBox } from '../../assets/helper';
import ComicsItem from './ComicsItem';

const comics = [
    {
        id:1,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:2,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:3,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:4,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:5,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:6,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:8,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
    {
        id:9,
        name:"comic",
        img:"comic.jpg",
        price:123
    },
]

const ComicsInner = () => {
    const comicsItem = comics.map(({id, name, price, img}) => {
        return <ComicsItem key={id} name={name} price={price} img={img}></ComicsItem>
    })
    return ( 
        <FlexBox className='wrap'>
            {comicsItem}
        </FlexBox>        
    );
}
 
export default ComicsInner;