import * as Yup from 'yup';
type RecoverPasswordProps = {
  onSubmit : ()=>void
}
export const RecoverPasswordValidation = ({onSubmit}: RecoverPasswordProps) => {
  return {
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Endereço de email invalido")
				.required("Required"),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
