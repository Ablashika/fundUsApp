const initialState = {
  login: false,
  user: null,
  error: {},
  businesses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      console.log(action.payload);
      return { ...state, login: true, user: action.payload };

    case "ADD_USER":
      return { ...state, login: true, user: action.payload };

    case "GET_USER":
      return { ...state, login: true, user: action.payload };

    case "LOGGED_OUT":
      return { ...state, login: false, user: null };

    case "LOGIN_ERROR":
      return {
        ...state,
        error: { login: action.payload },
      };

    case "SET_BUSINESSES":
      return { ...state, businesses: action.payload };
    case "GET_BUSINESSES":
      return { ...state, businesses: action.payload };

    default:
      return state;
  }
};
