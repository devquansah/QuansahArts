import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="donationDate" source="donationDate" />
        <TextInput label="donorEmail" source="donorEmail" type="email" />
        <TextInput label="donorName" source="donorName" />
      </SimpleForm>
    </Edit>
  );
};
