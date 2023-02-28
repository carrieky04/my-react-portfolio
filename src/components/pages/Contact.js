// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//         <Typography>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
//           fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
//           aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis.
//         </Typography>
//       </Container>
//     </React.Fragment>
//   );
// }
import { useForm } from "react-hook-form";
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer
    defaultValues={{
      name: '',
    }}
    onSuccess={onSubmit('submit')}
  >
    <TextFieldElement name={'name'} label={'Name'} required /> <br />
    <TextFieldElement
      name={'email'}
      label={'Email'}
      required
      type={'email'}
    />{' '}
    <br />
    <TextFieldElement name={'interest'} label={'Interest'} /> <br />
    <SubComponent />
  </FormContainer>
    </form>
  );
}