const initialState = {
  cats: [],
  loading: false,
  favoriteCats: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED':
      return {
        ...state,
        cats: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
