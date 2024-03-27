import * as Yup from 'yup';

type LoginValidation = {
  onSubmit?: () => void
}
export const LoginValidation = ({onSubmit}: LoginValidation) => {
  return {
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Endereço de email inválido")
				.required("Required"),
			password: Yup.string().required("Required"),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
