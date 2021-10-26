import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";

function App() {
  const findPaletteById = (id) => seedColors.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => <Palette palette={generatePalette(findPaletteById(routeProps.match.params.id))} />}
      />
    </Switch>
  );
}

export default App;
