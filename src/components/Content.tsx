import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { chevronBack } from "ionicons/icons";

type propsType = {
  data: Array<object>;
};

const Content = (props: propsType) => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle style={{ minHeight: "50px" }}>
          <div style={{ display: "flex" }}>
            <Link to="/">
              <IonIcon icon={chevronBack} />
            </Link>{" "}
            <span style={{ marginLeft: "10px" }}>Content</span>
          </div>
        </IonTitle>
      </IonHeader>
      <IonContent>
        <IonList>
          {props.data.map((el: any, idx: number) => (
            <IonItem>
              <IonLabel key={`${idx}name`}>{el}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Content;
