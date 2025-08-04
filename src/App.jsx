import Greeting from "./components/Greeting";
import ClickButton from "./components/ClickButton";
import Counter from "./components/State";

function ParentComponent() {
  return (
    <>
      <Greeting name="Benedict" />
      <ClickButton/>
      <Counter/>
    </>
  );
}

export default ParentComponent;
