import * as Yup from 'yup';

export const LoginValidation = () => {
  return {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => console.log("login submitted"),
  }
};
