
const apiKey = process.env.REACT_APP_API_KEY;                                                                                                                              
const httpCall = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
console.log("API Key:", process.env.REACT_APP_API_KEY);

httpCall
  .then((response) => response.json())
  .then(({data}) => {
    const {url} = data.images.original;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img); 

  })
  .catch(console.warn);
