import * as Yup from 'yup';


type RegisterValidation = {
  onSubmit?: () => void
}
export const RegisterValidation = ({onSubmit}: RegisterValidation) => {
  return {
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters (@ $ ! % * ? & .)'
        )
        .required('Required'),
      phone: Yup.string()
        .matches(/^\d{9}$/, 'Phone number must be from Mozambique and have 9 additional digits')
        .required('Required'),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      onSubmit  && onSubmit()
    },
  }
};
