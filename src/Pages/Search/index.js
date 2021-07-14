import Header from '../../components/Header'
import Main from '../../components/Main'

function Search({params}) {

    const location = decodeURI(params.location)
    const guests = {adults: parseInt(params.adults), children : parseInt(params.children) }
    return (
        <>
            <Header location={location} guests={guests}/>
            <Main location={location} guests={guests}/>
        </>
    )
}

export default Search
