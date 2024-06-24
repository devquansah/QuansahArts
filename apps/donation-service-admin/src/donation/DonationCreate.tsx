import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="donationDate" source="donationDate" />
        <TextInput label="donorEmail" source="donorEmail" type="email" />
        <TextInput label="donorName" source="donorName" />
      </SimpleForm>
    </Create>
  );
};
