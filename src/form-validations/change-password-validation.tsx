import * as Yup from 'yup';

type ChangePasswordProps = {
  onSubmit: ()=>void
}
export const ChangePasswordValidation = ({onSubmit}: ChangePasswordProps) => {
  return {
		initialValues: {
			password: "",
			passwordConfirmation: "",
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(8, "A senha deve conter pelo menos 8 caracteres")
				.matches(
					/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
					"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um dos caracteres especiais (@ $ ! % * ? & .)"
				)
				.required("Required"),
			passwordConfirmation: Yup.string()
				.required("Por favor redigite sua senha.")
				.oneOf([Yup.ref("password")], "Suas senhas não coincidem."),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
