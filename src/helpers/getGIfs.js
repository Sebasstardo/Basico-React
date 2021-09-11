export const getGifs = async (categories) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categories
  )}&limit=10&api_key=M87Qs9Vq1PhGxMSg3Xh6HMNzpG6diesb`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  // console.log(data)

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
