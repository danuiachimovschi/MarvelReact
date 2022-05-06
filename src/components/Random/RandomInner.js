import Randomleft from './RandomLeft';
import { FlexBox } from './../../assets/helper';
import RandomRight from './RandomRight';


const RandomInner = () => {
    return ( 
        <FlexBox>
            <Randomleft/>
            <RandomRight/>
        </FlexBox>
     );
}
 
export default RandomInner;