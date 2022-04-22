export const getGift = async (  category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ap61YMUGTkGotUbI98LPU9WclU8i4Byb&q=${ encodeURI(category) }&limit=1`;
    const response = await fetch(url);
    const {data} = await response.json();

    
    const result = data.map( (d) => {
            return {
                id: d.id,
                title: d.title,
                url: d.images?.downsized_medium.url
            }
        });
    
    return result;
    // setImages( result )
}