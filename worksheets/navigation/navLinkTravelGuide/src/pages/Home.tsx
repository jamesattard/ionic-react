import { IonNav } from "@ionic/react";
import Welcome from "./Welcome";

const Home: React.FC = () => {
  return <IonNav root={() => <Welcome />}></IonNav>;
};

export default Home;
