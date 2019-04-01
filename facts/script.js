const quotes = [ 
    {
    name: 'thanos',
    quote:'should have gone for the head'
}
,
{
    name: 'spiderman',
    quote:'Mr Stark i dont feel so good'
}
,
{
    name: 'patrick',
    quote: 'the inner mechaniasms of my mind are an inigma'
}
,
{
    name:'AHHHHH',
    quote: 'Snake whats going on ,snake? Snake!'
}
,
{
    name: 'Fallout 76',
    quote: 'Country Roads take me home'
}
,
{
 name: 'News',
 quote: 'E.V.I.L every villian is Lemons'

}
,
{
 name: 'Mermaid-Man',
 quote:'EVILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL'
}
,


]






const quoteBtn = document.querySelector('#quoteBtn');
const wowOdd = document.querySelector('#wowOdd');
const Quote = document.querySelector('#quote');


document.getElementById("quoteBtn").addEventListener("click", displayQuote);

function displayQuote () {
   
    let number = Math.floor(Math.random()*quotes.length);
    wowOdd.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;



}