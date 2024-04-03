
import Welcome from "./components/Welcome"

function App() {
  
  const userInfo = {
    name : "이정환",
    isMember : true
  }

  return (
    <>
      <Welcome {...userInfo} />
    </>
  );
}

export default App
