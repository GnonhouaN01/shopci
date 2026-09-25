import "./App.css";
import { Button } from "@/components/ui/button";
function App() {
  return (
    <>
      <Button variant="default" size="default">
        Cliquer
      </Button>
      <Button variant="destructive">Supprimer</Button>
      <Button variant="outline">Annuler</Button>
    </>
  );
}

export default App;
