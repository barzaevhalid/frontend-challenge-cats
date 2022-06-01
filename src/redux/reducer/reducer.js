const initialState = {
  cats: [],
  loading: false,
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
    case 'FETCHING_NEW_CATS':
      console.log(state.cats);
      return {
        ...state,
        cats: [...state.cats, ...action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
