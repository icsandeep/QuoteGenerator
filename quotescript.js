function genarate(){
    let quotes ={
        "Dalai Lama" : '"The purpose of our lives is to be happy."',
        "John Lennon" : '"Life is what happens when you are busy making other plans."',
        "Stephen King" : '"Get busy living or get busy dying."' ,
        "Thomas Edison" : '"Many of lifes failures are people who did not realize how close they were to success when they gave up."',
        "Mae West" : '"You only live once, but if you do it right, once is enough."'

          }
          let authors = Object.keys(quotes)
          let author = authors[Math.floor(Math.random() * authors.length)]
          let quote = quotes[author]
          document.getElementById("quote").innerHTML = quote
          document.getElementById("author").innerHTML = author
}