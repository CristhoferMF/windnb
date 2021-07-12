import React from 'react'
import {
    StayCardContainer,
    ImageStayCard,
    InfoRow,
    TypeRow,
    SuperHost,
    Type,
    RatingWrapper,
    StarIconCSS,
    Title
} from './StayCardComponents'


function StayCard({photo,superHost,type,beds,rating,title}) {
    return (
        <StayCardContainer>
            <ImageStayCard src={photo}/>
            <InfoRow>
                <TypeRow>
                    {superHost ? <SuperHost/> : null}
                    <Type>{type}{ (beds) ? ` . ${beds} beds`:''}</Type>
                </TypeRow>
                <RatingWrapper>
                    <StarIconCSS/>
                    {rating}
                </RatingWrapper>
            </InfoRow>
            <Title>{title}</Title>
        </StayCardContainer>
    )
}


export default StayCard
