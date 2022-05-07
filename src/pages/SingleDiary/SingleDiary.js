import ComicInner from "../../components/ComicItem/ComicInner"
import HeaderComics from "../../components/ComicsHeader/HeaderComics"

const dataComic = {
    img:"comic.jpg",
    name:"name",
    desc:"desc",
    pages:123,
    lang:"en-us",
    price:88
}

export const SingleDiary = () => {
    return (
        <>
            <HeaderComics/>
            <ComicInner dataComic={dataComic}/>
        </>
    )
}