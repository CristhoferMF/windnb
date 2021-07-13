import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../images/logo.svg'

import {
    HeaderContainer,
    HeaderWrapper,
    LogoWrapper,
    Logo,
    SearchWidgetWrapper,
    LocationText,
    GuestsText,
    SearchIconWrapper} from './HeaderComponents'
import SearchForm from './SearchForm'

function Header({location,guests}) {

    const [isFormVisible,setIsFormVisible] = useState(false);
    const guestsCount = guests.children + guests.adults;

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <LogoWrapper>
                    <a href="/">
                        <Logo src={logo}/>
                    </a>
                </LogoWrapper>
                <SearchWidgetWrapper onClick={() => setIsFormVisible(true)}>
                    <LocationText>{location}</LocationText>
                    <GuestsText>{(guestsCount) ? guestsCount+' guests' : 'Add Guests'}</GuestsText>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </SearchWidgetWrapper>
            </HeaderWrapper>
            <SearchForm location={location} guests={guests} setIsFormVisible={setIsFormVisible} isFormVisible={isFormVisible}/>
        </HeaderContainer>
    )
}

export default Header
