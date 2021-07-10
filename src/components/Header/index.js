import React,{useState,useRef, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {
    HeaderContainer,
    HeaderWrapper,
    LogoWrapper,
    Logo,
    SearchWidgetWrapper,
    LocationText,
    GuestsText,
    SearchIconWrapper} from './HeaderComponents'
import logo from '../../images/logo.svg'

import {
    SearchFormFullHeigth,
    SearchFormContainer,
    SearchFormWrapper,
    FormRow,
    FormRowInputWrapper,
    InputWrapper,
    ButtonSubmitWrapper,
    ButtonSubmit,
    LocationOptionList,
    LocationOption,
    GuestCounterWrapper,
    GuestCounter,
    GuestCounterLabel,
    GuestCounterButtons,
    GuestCounterButton,
    EmptyColumn} from './HeaderComponents'

function SearchForm(props){
    
    const [location, setLocation] = useState(props.location)
    const [guests, setGuests] = useState(()=> {
        const {children,adults} = props.guests
        return children+adults
    })
    const [guestsObj, setGuestsObj] = useState(props.guests)
    const [locations,setLocations] = useState([])
    const refForm = useRef(null); 
    const refInputLocation = useRef(null); 
    
    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleFocusInput = (e) => {
        const input = e.target;
        const parent = input.parentElement;

        parent.parentElement.childNodes.forEach(function(child){
            child.classList.remove('is-focus');
        })

        parent.classList.add('is-focus');
        
    }
    useEffect(() => {
        
        function handleClickOutside(e){

            if(refForm.current && !refForm.current.contains(e.target)){
                props.setIsFormVisible(false)
            }
        }
        document.addEventListener('mousedown',handleClickOutside)
        return () => {
            document.removeEventListener('mousedown',handleClickOutside)
        }
    }, [])

    useEffect(()=>{
        if(refInputLocation.current) refInputLocation.current.focus();
    },[])
    
    useEffect(()=>{
        const {children,adults} = guestsObj

        if(children || adults){
            setGuests(children + adults)
        }

    },[guestsObj])

    /* Render */

    return (
        <SearchFormFullHeigth>
            <SearchFormContainer ref={refForm}>
                <SearchFormWrapper>
                        <FormRowInputWrapper>
                            <InputWrapper active={true}>
                                <label>Location</label>
                                <input onFocus={handleFocusInput}  ref={refInputLocation} value={location} onChange={handleChangeLocation} placeholder="Add Location" />
                            </InputWrapper>
                            <InputWrapper>
                                <label>Guest</label>
                                <input onFocus={handleFocusInput} value={guests} placeholder="Add guests" min="0" type="number" onChange={(e)=>{ setGuests(e.target.value)}}/>
                            </InputWrapper>
                            <InputWrapper>
                                <ButtonSubmitWrapper>
                                    <ButtonSubmit><SearchIcon/>Search</ButtonSubmit>
                                </ButtonSubmitWrapper>
                            </InputWrapper>
                        </FormRowInputWrapper>
                        <FormRow minHeight="330px">
                            <LocationOptionList>
                                <LocationOption>Helsinki, Finland</LocationOption>
                            </LocationOptionList>
                            <GuestCounterWrapper>
                                <GuestCounter>
                                    <GuestCounterLabel>
                                        <b>Adults</b>
                                        Ages 13 or above
                                    </GuestCounterLabel>
                                    <GuestCounterButtons>
                                        <GuestCounterButton>-</GuestCounterButton>
                                        <div><b>0</b></div>
                                        <GuestCounterButton>+</GuestCounterButton>
                                    </GuestCounterButtons>
                                </GuestCounter>
                                <GuestCounter>
                                    <GuestCounterLabel>
                                        <b>Adults</b>
                                        Ages 13 or above
                                    </GuestCounterLabel>
                                    <GuestCounterButtons>
                                        <GuestCounterButton>-</GuestCounterButton>
                                        <div><b>0</b></div>
                                        <GuestCounterButton>+</GuestCounterButton>
                                    </GuestCounterButtons>
                                </GuestCounter>
                            </GuestCounterWrapper>
                            <EmptyColumn/>
                        </FormRow>
                </SearchFormWrapper>
            </SearchFormContainer>
        </SearchFormFullHeigth>
    )
}

SearchForm.defaultProps = {
    guests:{
        children:0,
        adults:0
    }
}
function Header() {

    const [isFormVisible,setIsFormVisible] = useState(false);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <LogoWrapper>
                    <a href="/">
                        <Logo src={logo}/>
                    </a>
                </LogoWrapper>
                <SearchWidgetWrapper onClick={() => setIsFormVisible(true)}>
                    <LocationText>Helsinki, Finland</LocationText>
                    <GuestsText>Add Guest</GuestsText>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </SearchWidgetWrapper>
            </HeaderWrapper>
            {isFormVisible && <SearchForm location={"Helsinki, Finland"} setIsFormVisible={setIsFormVisible}/>}
        </HeaderContainer>
    )
}

export default Header
