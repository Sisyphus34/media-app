import React from "react";
import { Route } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import Interests from "components/Interests";
import History from "components/History";
import ResultsTab from "components/Results/ResultsTab";
import Nav from "components/Nav";
import Favorites from "components/Favorites";
import { FavoritesContextProvider } from "contexts/FavoritesContext";
import { InterestsContextProvider } from "contexts/InterestsContext";

function App() {
  return (
    <FavoritesContextProvider>
      <InterestsContextProvider>
        <div className="App">
          <Route path="/" component={Nav} />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/search/:query" component={ResultsTab} />
          <Route path="/interests" component={Interests} />
          <Route path="/history" component={History} />
          <Route path="/favorites" component={Favorites} />
        </div>
      </InterestsContextProvider>
    </FavoritesContextProvider>
  );
}

export default App;
