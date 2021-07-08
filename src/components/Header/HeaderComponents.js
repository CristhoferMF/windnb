import styled from "styled-components";
import {colors, screens} from '../../config/theme'

export const HeaderContainer = styled.div`
    
`

export const HeaderWrapper = styled.div`
    max-width: ${screens.lg};
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 12px 0px 12px;
    gap:30px;

    @media (min-width: ${screens.sm}) { 
        flex-direction: row;
        gap: 0;
    }

    @media (min-width: ${screens.lg}) { 
        padding: 35px 0px;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    height: 55px;
    align-items: center;
`
export const Logo = styled.img`
    height: 20px;
    user-select: none;
    cursor: pointer;
`

export const SearchWidgetWrapper = styled.div`
    cursor: pointer;
    height: 55px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    font-family: 'Mulish';
    max-width: min-content;
    display: flex;
    align-self: center;
    user-select: none;
    overflow: hidden;

    &:hover{
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }
`
export const InputLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    border-right: 1px solid #F2F2F2;
`
export const InputGuests = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    border-right: 1px solid #F2F2F2;
    color:#BDBDBD;
`
export const SearchIconWrapper = styled.div`
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${colors.primary};
`