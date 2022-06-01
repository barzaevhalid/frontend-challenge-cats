const apiKey = process.env.REACT_APP_API_KEY;

export const getCats = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING' });
    fetch(`https://api.thecatapi.com/v1/images/search?limit=15&${apiKey}`)
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'FETCHED', payload: data }));
  };
};
export const getNewCats = () => {
  return (dispatch) => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=100&order=Rand&${apiKey}`)
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'FETCHING_NEW_CATS', payload: data }));
  };
};
