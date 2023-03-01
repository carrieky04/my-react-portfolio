import { useForm } from "react-hook-form";
import {
  FormContainer,
  TextFieldElement,
  TextareaAutosizeElement
} from "react-hook-form-mui";
import Button from '@mui/material/Button';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

// <form onSubmit={handleSubmit(onSubmit)}>
//   <input {...register("firstName", { required: true, maxLength: 20 })} />
//   <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//   <input type="number" {...register("age", { min: 18, max: 99 })} />
//   <input type="submit" />
// </form>

    <FormContainer
      defaultValues={{
        name: "",
      }}
      // onSuccess={handleSubmit('submit')}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextFieldElement
        name={"name"}
        label={"Name"}
        required
        error
          id="outlined-error-helper-text"
          defaultValue="First, Last Name"
          helperText="Incorrect entry."
      />
      <br />
      <TextFieldElement
        name={"email"}
        label={"Email"}
        required
        type={"email"}
        error
        helperText={"This is a required field"}
      />{" "}
      <br />
      <TextareaAutosizeElement
        label="Message"
        name="message"
        required
        error
        helperText={"This is a required field"}
      />
      <br />
      <Button type={'submit'} color={'primary'}>
        Submit
      </Button>
    </FormContainer>
  );
}

