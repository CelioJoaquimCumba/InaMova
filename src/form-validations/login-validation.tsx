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
				.email("O endereço de email que você digitou está incorreto. Certifique-se de que não há espaços em branco no final do email e de que o email é válido")
				.required("Required"),
			password: Yup.string().required("Required"),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
