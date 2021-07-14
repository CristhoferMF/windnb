import styled from "styled-components";
import {colors, screens} from '../../config/theme'

export const HeaderContainer = styled.div `
    font-family: 'Mulish' sans-serif;

    div,input,button,label {
        font-family: 'Mulish';
        font-size: 14px;
    }
`

export const HeaderWrapper = styled.div `
    max-width: ${screens.lg};
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 12px 35px 12px;
    gap:30px;

    @media (min-width: ${screens.sm}) { 
        flex-direction: row;
        gap: 0;
    }

    @media (min-width: ${screens.lg}) { 
        padding: 35px 0px 60px 0px;
    }
`

export const LogoWrapper = styled.div `
    display: flex;
    height: 55px;
    align-items: center;
`
export const Logo = styled.img `
    height: 20px;
    user-select: none;
    cursor: pointer;
`

export const SearchWidgetWrapper = styled.div `
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
export const LocationText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    text-overflow: ellipsis;
    border-right: 1px solid #F2F2F2;
`
export const GuestsText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    border-right: 1px solid #F2F2F2;
    color:#BDBDBD;
`
export const SearchIconWrapper = styled.div `
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${colors.primary};
`

/* Search Form */
export const SearchFormFullHeigth = styled.div `
    height: 100vh;
    background: rgba(79, 79, 79, 0.4);
    position: absolute;
    inset: 0;
    display: ${ (props) => props.isVisible
    ? 'block'
    : 'none'};
    max-height: 100vh;
    overflow: auto;
`

export const SearchFormContainer = styled.form `
    background: #ffffff;
    transition: all ease 1s;
`

export const SearchFormWrapper = styled.div `
    max-width: ${screens.lg};
    margin: auto;
    display: flex;
    flex-direction: column;


    @media (min-width: ${screens.lg}){
        padding-top: 90px;
    }
`
export const SearchMobileRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 18px 12px;

    @media (min-width : ${screens.lg}){
        display: none;
    }
`
export const SearchMobileLabel = styled.div `
    font-weight: bold;
`
export const SearchMobileToogle = styled.a `
    font-size: 18px;
    font-weight: bold;
`

export const FormRowInputWrapper = styled.div `
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-inline: 12px;
    
    @media (min-width:${screens.lg}){
        flex-direction: row;
        margin-inline: 0px;
    }
`

export const InputWrapper = styled.div `
    flex: 1 1 33.333333%;
    display: flex;
    flex-direction: column;
    gap:4px;
    justify-content: center;
    border: 1px solid #F2F2F2;

    &.is-focus{
        border: 1px solid #333333;
        border-radius: 16px;
    }
       

    label{
        font-weight: 800;
        font-size: 9px;
        text-transform: uppercase;
        margin-top: 12px;
        padding-inline: 30px;
    }

    input{
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        outline: none;
        border:none;
        margin-bottom: 12px;
        padding-inline: 30px;
    }
`
export const ButtonSubmitWrapper = styled.div `
    display: none;
    justify-content: center;
    align-items: center;

    @media (min-width : ${screens.lg}){
        display: flex;
    }
`
export const ButtonSubmitWrapperMobile = styled.div`
    display: flex;
    justify-content: center;
    padding:35px 12px;
    @media (min-width : ${screens.lg}){
        display: none;
    }
`

export const ButtonSubmit = styled.button `
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
export const Input = styled.div `

    ${InputWrapper}:focus & {
            background: red;
    }
`

export const FormRow = styled.div `
    display: flex;
    flex-direction: column;

    @media (min-width:${screens.lg}){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        min-height: ${props => props.minHeight};
    }

    > div{
        padding: 45px 30px;
    }
`

FormRow.defaultProps = {
    minHeight: 'auto'
}

export const LocationOptionList = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:35px;
`

export const LocationOption = styled.div `
    color: #4F4F4F;
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
`

export const GuestCounterWrapper = styled.div `
    flex: 1;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap:30px;

    @media (min-width : ${screens.lg} ){
        grid-column: 2 / 3;
        gap:0px;
    }
`

export const GuestCounter = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const GuestCounterLabel = styled.div `
    display: flex;
    flex-direction: column;
    gap:3px;
`

export const GuestCounterButtons = styled.div `
    display: inline-flex;
    justify-content: space-between;
    gap:15px;
    max-width: 90px;
`
export const GuestCounterButton = styled.a `
    border: 1px solid #828282;
    border-radius: 4px;
    color: #828282;
    cursor: pointer;
    padding:2px 5px;
`
export const EmptyColumn = styled.div `
    flex: 1;
    display: block;
`
