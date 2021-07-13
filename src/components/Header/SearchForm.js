import React,{useState,useRef, useEffect} from 'react'
import { removeDups } from '../../helpers/arrays';
import { onlyLetters } from '../../helpers/strings';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import { useLocation } from "wouter";

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
import data from '../../stays.json'

const MAX_GUESTS = 10;

export default function SearchForm(props){
    
    const [locationWouter, setLocationWouter] = useLocation();
    const [location, setLocation] = useState(props.location)
    const [guests, setGuests] = useState(props.guests)
    const [suggestedLocations,setSuggestedLocations] = useState([])

    const refForm = useRef(null); 
    const refInputLocation = useRef(null); 
    
    const handleChangeLocation = (e) => {
        const term = e.target.value
        const termtoSearch = onlyLetters(term);
        /* Show suggested locations */
        const suggestedLocations = data.filter( suggestedLocation => 
            ( (suggestedLocation.city.toLowerCase() + suggestedLocation.country.toLowerCase()).indexOf(termtoSearch) >= 0 ))
            .map( suggestedLocation => `${suggestedLocation.city}, ${suggestedLocation.country}`)
        
        setLocation(term);
        setSuggestedLocations(removeDups(suggestedLocations).slice(0,4));
    }

    const handleClickLocationSuggested = (suggestedLocation,e) => {
        setLocation(suggestedLocation)
        setSuggestedLocations([])
    }

    const handleMinusGuestsCounter = (guestsKey,e) => {

        if(guests[guestsKey] <= 0) return;

        setGuests( (prevGuestsObj) => {
            const newGuest = {...prevGuestsObj};
            newGuest[guestsKey]--
            return newGuest
        })
    }
    const handlePlusGuestsCounter = (guestsKey,e) => {

        if(guests[guestsKey] > MAX_GUESTS ) return;

        setGuests( (prevGuestsObj) => {
            const newGuest = {...prevGuestsObj};
            newGuest[guestsKey]++
            return newGuest
        })
    }
    const handleFocusInput = (e) => {
        const input = e.target;
        const parent = input.parentElement;

        parent.parentElement.childNodes.forEach(function(child){
            child.classList.remove('is-focus');
        })

        parent.classList.add('is-focus');
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = `/s/?location=${location}&adults=${guests.adults}&children=${guests.children}`
        setLocationWouter(URL)
        props.setIsFormVisible(false)
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
            document.body.style.overflow = "auto"
        }
    }, [])

    useEffect(() => {

        if(props.isFormVisible){
            document.body.style.overflow = "hidden"
            if (refInputLocation.current) refInputLocation.current.focus();
        }
        
        return () => { document.body.style.overflow = "auto" }
    }, [props.isFormVisible])

    /* Render */

    return (
        <SearchFormFullHeigth isVisible={props.isFormVisible}>
            <SearchFormContainer ref={refForm} onSubmit={handleSubmit}>
                <SearchFormWrapper>
                        <FormRowInputWrapper>
                            <InputWrapper active={true}>
                                <label>Location</label>
                                <input onFocus={handleFocusInput}  ref={refInputLocation} value={location} onChange={handleChangeLocation} placeholder="Add Location" />
                            </InputWrapper>
                            <InputWrapper>
                                <label>Guest</label>
                                <input onFocus={handleFocusInput} value={guests.children + guests.adults} readOnly placeholder="Add guests" min="0" type="number"/>
                            </InputWrapper>
                            <InputWrapper>
                                <ButtonSubmitWrapper>
                                    <ButtonSubmit type="submit"><SearchIcon/>Search</ButtonSubmit>
                                </ButtonSubmitWrapper>
                            </InputWrapper>
                        </FormRowInputWrapper>
                        <FormRow minHeight="330px">
                            <LocationOptionList>
                                {
                                    suggestedLocations.map( (suggestedLocation,index) => (
                                        <LocationOption key={index} onClick={handleClickLocationSuggested.bind(this,suggestedLocation)}>
                                            <LocationOnIcon/>
                                            {suggestedLocation}
                                        </LocationOption>
                                    ))
                                }
                            </LocationOptionList>
                            <GuestCounterWrapper>
                                <GuestCounter>
                                    <GuestCounterLabel>
                                        <b>Adults</b>
                                        Ages 13 or above
                                    </GuestCounterLabel>
                                    <GuestCounterButtons>
                                        <GuestCounterButton onClick={handleMinusGuestsCounter.bind(this,'adults')}>-</GuestCounterButton>
                                        <div><b>{guests.adults}</b></div>
                                        <GuestCounterButton onClick={handlePlusGuestsCounter.bind(this,'adults')}>+</GuestCounterButton>
                                    </GuestCounterButtons>
                                </GuestCounter>
                                <GuestCounter>
                                    <GuestCounterLabel>
                                        <b>Children</b>
                                        Ages 13 or above
                                    </GuestCounterLabel>
                                    <GuestCounterButtons>
                                        <GuestCounterButton onClick={handleMinusGuestsCounter.bind(this,'children')}>-</GuestCounterButton>
                                        <div><b>{guests.children}</b></div>
                                        <GuestCounterButton onClick={handlePlusGuestsCounter.bind(this,'children')}>+</GuestCounterButton>
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