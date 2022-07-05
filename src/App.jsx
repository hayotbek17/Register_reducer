import { useReducer } from "react";
import "./App.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
  termsAccepted: false,
};

function reducer(state, action) {
  return { ...state, [action.input]: action.value };
}

function validateState(state) {
  return (
    state.password === state.passwordRepeat &&
    state.termsAccepted &&
    state.password > 3
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registreted !`);
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === "termsAccepted" ? checked : value,
    };
    dispatch(action);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h2 className="heading">Register</h2>
        <form className="RegForm">
          <input
            className="textInput"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="password"
            name="passwordRepeat"
            placeholder="Password repeat"
            onChange={onChange}
          />
          <label className="TouCheckboxLabel">
            <input
              type="checkbox"
              className="TouCheckbox"
              name="termsAccepted"
              onChange={onChange}
            />
            Accept Terms of Use!
          </label>
          <button
            disabled={!validateState(state)}
            onClick={handleClick}
            className={!validateState(state) ? "Disabled" : null}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
