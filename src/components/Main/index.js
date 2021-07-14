import { useState , useEffect} from 'react'

import {
    MainContainer,
    MainWrapper,
    RowTop,
    StayLocationTitle,
    StaysCount,
    StayCardGrid,
} from './MainComponents'
import StayCard from '../StayCard'
import STAYS from '../../stays.json'
import { onlyLetters } from '../../helpers/strings';


function Main({location,guests}) {
  
    const [stays,setStays] = useState([]);

    useEffect(() => {
        const getStays = () => {
        const termtoSearch = onlyLetters(location);
        console.log(termtoSearch,guests)
        /* Show suggested locations */
        const staysFiltered = STAYS.filter( suggestedLocation => 
            ( (suggestedLocation.city.toLowerCase() + suggestedLocation.country.toLowerCase()).indexOf(termtoSearch) >= 0 ) &&
                suggestedLocation.maxGuests >= (guests.adults + guests.children) )
            setStays(staysFiltered)
        }
        getStays();
    }, [location,guests])

    return (
        <MainContainer>
            <MainWrapper>
                <RowTop>
                    <StayLocationTitle>Stays in {location}</StayLocationTitle>
                    <StaysCount>{stays.length}+ Stays</StaysCount>
                </RowTop>
                <StayCardGrid>
                    {stays.map( ({photo,superHost,type,beds,rating,title},index) => {
                        const props = {photo,superHost,type,beds,rating,title} ; 
                        return <StayCard {...props} key={title} />
                    })}   
                </StayCardGrid>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main
