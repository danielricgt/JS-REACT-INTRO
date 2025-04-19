const getImgAsync = async () => {
    try {
      const apiKey = "DzO6Myu63s5cDf7kGRh9SPmLRnNMUu5u";
      const httpCall = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await httpCall.json();
      const { url } = data.images.original;
      console.log(url);
  
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    } catch (error) {
      console.error(error);
    }
  };
  
  getImgAsync();
  