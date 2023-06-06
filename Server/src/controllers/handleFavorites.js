let myFavorites = [];

const postFav = (req, res) => {
   myFavorites.push(req.body);
  return res.json(myFavorites);
}; 

const deleteFav = (req, res) => {
  const { id } = req.params;
  const filterChar = myFavorites.filter((c) => {
    return c.id !== id
  });
  myFavorites = filterChar;
  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav
};