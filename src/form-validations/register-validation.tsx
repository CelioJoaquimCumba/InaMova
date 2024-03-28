import * as Yup from 'yup';


type RegisterValidation = {
  onSubmit?: () => void
}
export const RegisterValidation = ({onSubmit}: RegisterValidation) => {
  return {
		initialValues: {
			name: "",
			email: "",
			password: "",
			phone: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(3, "O nome deve ter pelo menos 3 caracteres")
				.required("Required"),
			email: Yup.string()
				.email("O endereço de email que você digitou está incorreto. Certifique-se de que não há espaços em branco no final do email e de que o email é válido")
				.required("Required"),
			password: Yup.string()
				.min(6, "A senha deve ter pelo menos 6 caracteres")
				.matches(
					/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
					"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um dos caracteres especiais (@ $ ! % * ? & .)"
				)
				.required("Required"),
			phone: Yup.string()
				.matches(
					/^\d{9}$/,
					"O número de telefone deve ser de Moçambique e ter 9 dígitos adicionais"
				)
				.required("Required"),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
