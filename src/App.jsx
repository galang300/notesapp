import reactLogo from "./assets/react.svg";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience"; 

import "./styles/App.css";
function App() {
  return (
   <main className="app">
    <header>
      <h1>CV Application</h1>
      <p>Create your professional CV</p>
    </header>

    <GeneralInfo />
    <Education/>
    <Experience/>
   </main>
  );
}
export default App;