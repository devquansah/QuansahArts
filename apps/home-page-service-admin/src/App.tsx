import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceTimeList } from "./serviceTime/ServiceTimeList";
import { ServiceTimeCreate } from "./serviceTime/ServiceTimeCreate";
import { ServiceTimeEdit } from "./serviceTime/ServiceTimeEdit";
import { ServiceTimeShow } from "./serviceTime/ServiceTimeShow";
import { WelcomeMessageList } from "./welcomeMessage/WelcomeMessageList";
import { WelcomeMessageCreate } from "./welcomeMessage/WelcomeMessageCreate";
import { WelcomeMessageEdit } from "./welcomeMessage/WelcomeMessageEdit";
import { WelcomeMessageShow } from "./welcomeMessage/WelcomeMessageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Home Page Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ServiceTime"
          list={ServiceTimeList}
          edit={ServiceTimeEdit}
          create={ServiceTimeCreate}
          show={ServiceTimeShow}
        />
        <Resource
          name="WelcomeMessage"
          list={WelcomeMessageList}
          edit={WelcomeMessageEdit}
          create={WelcomeMessageCreate}
          show={WelcomeMessageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
