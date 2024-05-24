
const quoteURL = "https://api.quotable.io/random";

fetch(quoteURL, {method: "GET"})
    .then((data) => {
        return data.json();
    })
    .then((info) => {
        console.log(info)
        renderInfo(info.content, info.author)
    })


    function renderInfo(text, author) {
        const quote = document.createElement("p");
        quote.classList.add("quote")
        quote.textContent = `"${text}"`;

        const writer = document.createElement("p");
        writer.classList.add("writer");
        writer.textContent = `- ${author}`;

        document.body.append(quote, writer);
    }