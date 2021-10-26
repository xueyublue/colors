import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

function App() {
  const findPaletteById = (id) => seedColors.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route
        exact
        path="/palette/:paletteId"
        render={(routeProps) => (
          <Palette palette={generatePalette(findPaletteById(routeProps.match.params.paletteId))} />
        )}
      />
      <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />} />
    </Switch>
  );
}

export default App;
