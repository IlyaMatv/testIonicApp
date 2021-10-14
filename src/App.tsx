import { Link, Redirect, Route } from "react-router-dom";
import { IonApp, IonButton, IonPage, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Content from "./components/Content";
import { useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchOnMouseClick = () => {
    fetch("https://animechan.vercel.app/api/available/anime")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <IonPage>
              <Link style={{ margin: "auto" }} to="/content">
                <IonButton onClick={fetchOnMouseClick}>Click!</IonButton>
              </Link>
            </IonPage>
          </Route>

          <Route exact path="/content">
            <Content data={data} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
