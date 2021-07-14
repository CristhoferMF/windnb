import styled from "styled-components";
import {colors, screens} from '../../config/theme'

export const MainContainer = styled.main`
    margin-bottom:64px;
    padding: 0px 12px;
    
    @media (min-width: ${screens.lg}){
        padding: 0px;;
    }
`
export const MainWrapper = styled.div`
    max-width: ${screens.lg};
    margin:auto;
`

export const RowTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    align-items: center;
`

export const StayLocationTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    max-width: 70%;

    @media (min-width: ${screens.lg}){
        font-size: 24px;
    }
`

export const StaysCount = styled.div`
    color: #4F4F4F;
    font-size: 14px;
`

export const StayCardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 32px;

    @media (min-width: ${screens.md}){
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${screens.lg}){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const StayCard = styled.div`
    background: ${colors.primary};
    height: 270px;
`