import { IonNav } from "@ionic/react";
import PageOne from "./PageOne";

const Home: React.FC = () => {
  return <IonNav root={() => <PageOne />}></IonNav>;
};

export default Home;
