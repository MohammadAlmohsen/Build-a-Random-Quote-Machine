import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter,FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
import './App.css'

interface Quote{
  quote:string;
  author:string;
}
 
const getRandomQuote=():Quote=>{
  return quotes[Math.floor(Math.random()* quotes.length)]
}
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
 const changeQuote=()=>{
  setQuote(getRandomQuote())
 }
  return (
    <div className='background'>
      <div id="quote-box">
        <div className="quote-countent">
          <FaQuoteLeft size="30" style={{marginRight:"10px"}}/>
            <h2 id="text">
              {quote.quote}
            </h2>
            <FaQuoteRight size="30" style={{marginLeft:"10px"}}/>
            <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a  href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%E2%80%99s%20your%20place%20in%20the%20world%3B%20it%E2%80%99s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.%22%20Mae%20Jemison" 
          id="tweet-quote"
          style={{
            backgroundColor:"#1DA1F2",
            marginRight:"10px",
                      }}>
          <FaTwitter color='white'/>
                      </a>
                      <button id="new-quote" onClick={changeQuote}>Change Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
