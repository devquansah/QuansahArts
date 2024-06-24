import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const ServiceTimeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="day"
          label="day"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
