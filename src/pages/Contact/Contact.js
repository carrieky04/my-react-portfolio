import React from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  TextFieldElement,
  TextareaAutosizeElement,
} from "react-hook-form-mui";
import Button from "@mui/material/Button";
import { formStyles } from "./styles";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <FormContainer sx={formStyles.app} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldElement
        type="text"
        placeholder="First name"
        errorMessage="This field is required"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <br />
      <TextFieldElement
      sx={formStyles.form}
        type="text"
        placeholder="Last name"
        errorMessage="This field is required"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <br />
      <TextFieldElement
        type="text"
        placeholder="Email"
        errorMessage="This field is required"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <br />
      <TextareaAutosizeElement
        {...register("Message", { required: true, min: 5, maxLength: 100 })}
        placeholder="enter a message"
        sx={formStyles.form}
      />
      <br />

      <Button type={"submit"} color={"primary"} sx= {formStyles.button}>
        Submit
      </Button>

    </FormContainer>
  );
}
