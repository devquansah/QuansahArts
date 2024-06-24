import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WelcomeMessageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="messageText" source="messageText" />
      </SimpleForm>
    </Create>
  );
};
