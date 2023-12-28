import * as Yup from 'yup';

export const RecoverPasswordValidation = () => {
  return {
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => console.log("recover password submitted"),
  }
};
