import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContactFormSubmissionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="submittedAt" source="submittedAt" />
      </SimpleForm>
    </Edit>
  );
};
