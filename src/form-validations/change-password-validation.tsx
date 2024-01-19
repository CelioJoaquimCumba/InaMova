import * as Yup from 'yup';

type ChangePasswordProps = {
  onSubmit: ()=>void
}
export const ChangePasswordValidation = ({onSubmit}: ChangePasswordProps) => {
  return {
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters (@ $ ! % * ? & .)'
      )
      .required('Required'),
      passwordConfirmation: Yup.string()
     .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      onSubmit  && onSubmit()
    },
  }
};
