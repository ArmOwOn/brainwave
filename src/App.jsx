import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button href={"#login"}>Something</Button>
      <ButtonGradient />
    </>
  );
};

export default App;
