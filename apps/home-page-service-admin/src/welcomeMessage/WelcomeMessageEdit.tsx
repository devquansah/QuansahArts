import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WelcomeMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="messageText" source="messageText" />
      </SimpleForm>
    </Edit>
  );
};
