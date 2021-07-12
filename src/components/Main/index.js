import { useState } from 'react'
import {
    MainContainer,
    MainWrapper,
    RowTop,
    StayLocationTitle,
    StaysCount,
    StayCardGrid,
} from './MainComponents'
import StayCard from '../StayCard'
import LOCATIONS_DATA from '../../stays.json'

function Main() {

    const [locations,setLocations] = useState(LOCATIONS_DATA)

    return (
        <MainContainer>
            <MainWrapper>
                <RowTop>
                    <StayLocationTitle>Stays in Finland</StayLocationTitle>
                    <StaysCount>12+ Stays</StaysCount>
                </RowTop>
                <StayCardGrid>
                    {locations.map( ({photo,superHost,type,beds,rating,title}) => {
                        const props = {photo,superHost,type,beds,rating,title} ; 
                        return <StayCard {...props}/>

                    })}   
                </StayCardGrid>
            </MainWrapper>
        </MainContainer>
    )
}

export default Main
