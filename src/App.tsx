import { useState } from "react";
import "./App.css";
import { Pages } from "./components/Pages";
import { PageContext } from "./PageContext";

const App = () => {
  const [page, setPage] = useState<string>("register");

  return (
    <div className="App">
      <PageContext.Provider value={{ page, setPage }}>
        <Pages />
      </PageContext.Provider>
    </div>
  );
};

export default App;
