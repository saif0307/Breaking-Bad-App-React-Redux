import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import SearchBar from '../SearchBar'
import { getQuotes, getQuotesbyAuthor} from '../../actions'

const Quotes = (props) => {
    const {getQuotes, quotes, quote,getQuotesbyAuthor, searchValue} = props
    useEffect(() => {
        if(!quotes.length){
            getQuotes('walter white')
        }
        
         
    }, [getQuotes,  quotes.length])

    const renderQuotes = () => {
        const reducedQuotes = []
        if(!quotes.length) {
            return <div className="ui massive active  loader"></div>;
        }
        if(searchValue.trim() !== '' ) {
            return quote.map((quote) => {
                return (
                    <div className="item" key={quote.quote_id}>
                        <div className="content">
                            <div className="header">{quote.author}</div>
                            {quote.quote}
                        </div>
                    </div>
                )
            })
        }
        for(let i = 0; i <= 10; i++) {
            reducedQuotes.push(quotes[i])
        }
     return reducedQuotes.map((quote) => {
           return( <div className="item" key={quote.quote_id}>
                <div className="content">
                    <div className="header">{quote.author}</div>
                    {quote.quote}
                </div>
            </div>)
        })
    }

   

    return (
        <React.Fragment>
            <SearchBar placeHolder="Search by authors" onValueChange= {getQuotesbyAuthor}/>
            <br/>
            <div>Total quotes: &nbsp;{quotes.length}</div>
            <div className="ui celled list">
            {renderQuotes()}
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        quotes: state.quotes,
        quote: state.quote,
        characters: state.characters,
        searchValue: state.searchValue
    }
}
export default connect(mapStateToProps ,{getQuotes, getQuotesbyAuthor})(Quotes)