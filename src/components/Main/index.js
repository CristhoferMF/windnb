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


function Main({stays,location}) {
    
    return (
        <MainContainer>
            <MainWrapper>
                <RowTop>
                    <StayLocationTitle>Stays in {location}</StayLocationTitle>
                    <StaysCount>12+ Stays</StaysCount>
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
