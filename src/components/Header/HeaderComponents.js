import styled from "styled-components";
import {colors, screens} from '../../config/theme'

export const HeaderContainer = styled.div`
    font-family: 'Mulish' sans-serif;

    div,input,button,label {
        font-family: 'Mulish';
        font-size: 14px;
    }
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
        padding: 35px 0px 60px 0px;
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
    max-width: min-content;
    display: flex;
    align-self: center;
    user-select: none;
    overflow: hidden;

    &:hover{
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }
`
export const LocationText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    border-right: 1px solid #F2F2F2;
`
export const GuestsText = styled.div`
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

/* Search Form */
export const SearchFormFullHeigth = styled.div`
    height: 100vh;
    background: rgba(79, 79, 79, 0.4);
    position: absolute;
    inset: 0;
    display: ${(props) => props.isVisible ? 'block':'none'};
`

export const SearchFormContainer = styled.div`
    background: #ffffff;
    transition: all ease 1s;
`

export const SearchFormWrapper = styled.div`
    max-width: ${screens.lg};
    margin: auto;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
`

export const FormRowInputWrapper = styled.div`
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
`

export const InputWrapper = styled.div`
    flex: 1 1 33.333333%;
    display: flex;
    flex-direction: column;
    gap:4px;
    justify-content: center;
    padding: 12px 30px;
    border: 1px solid #F2F2F2;

    &.is-focus{
        border: 1px solid #333333;
        border-radius: 16px;
    }
       

    label{
        font-weight: 800;
        font-size: 9px;
        text-transform: uppercase;
    }

    input{
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        outline: none;
        border:none;
    }
`
export const ButtonSubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonSubmit = styled.button`
    background: #EB5757;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border:none;
    padding:15px 25px;
    color:white;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap:4px;
`
export const Input =styled.div`

    ${InputWrapper}:focus & {
            background: red;
    }
`

export const FormRow =styled.div`
    display: flex;
    min-height: ${props => props.minHeight};
`

FormRow.defaultProps={
    minHeight: 'auto'
}

export const LocationOptionList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 45px 30px;
    gap:35px;
`

export const LocationOption = styled.div`
    color: #4F4F4F;
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
`

export const GuestCounterWrapper = styled.div`
    flex: 1;
    padding: 45px 30px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const GuestCounter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const GuestCounterLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap:3px;
`

export const GuestCounterButtons = styled.div`
    display: inline-flex;
    justify-content: space-between;
    gap:15px;
    max-width: 90px;
`
export const GuestCounterButton = styled.button`
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
    color: #828282;
    cursor: pointer;
`
export const EmptyColumn = styled.div`
    flex: 1;
    display: block;
    padding: 45px 30px;
`
