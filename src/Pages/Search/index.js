import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import STAYS from '../../stays.json'

function Search() {
    return (
        <>
            <Header location="Helsinski, Finland" guests={ {adults: 0, children:0 }}/>
            <Main stays={STAYS} location="Helsinski"/>
        </>
    )
}

export default Search
