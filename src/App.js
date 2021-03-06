import { disableBodyScroll } from "body-scroll-lock";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const findPaletteById = (id) => seedColors.find((palette) => palette.id === id);
  const generatePaletteById = (id) => generatePalette(findPaletteById(id));
  disableBodyScroll(document);

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
      <Route
        exact
        path="/palette/:paletteId"
        render={({ match }) => <Palette palette={generatePaletteById(match.params.paletteId)} />}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={({ match }) => (
          <SingleColorPalette palette={generatePaletteById(match.params.paletteId)} colorId={match.params.colorId} />
        )}
      />
    </Switch>
  );
}

export default App;
