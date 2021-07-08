import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {HeaderContainer,HeaderWrapper,
LogoWrapper,Logo,SearchWidgetWrapper,InputLocation,InputGuests,SearchIconWrapper} from './HeaderComponents'
import logo from '../../images/logo.svg'

function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <LogoWrapper>
                    <a href="/">
                        <Logo src={logo}/>
                    </a>
                </LogoWrapper>
                <SearchWidgetWrapper>
                    <InputLocation>Helsinki, Finland</InputLocation>
                    <InputGuests>Add Guest</InputGuests>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </SearchWidgetWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
