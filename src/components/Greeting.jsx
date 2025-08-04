//PROPS
//It immports the Greeting component from the components folder
//A new component named ParentComponent is define. Inside it return statement, it uses the Greeting component and passes a prop called name with the value "Benedict"
//
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
