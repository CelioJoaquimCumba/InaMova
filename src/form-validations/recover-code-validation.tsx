import * as Yup from 'yup';
type RecoverCodeProps = {
  onSubmit : ()=>void
}
export const RecoverCodedValidation = ({onSubmit}: RecoverCodeProps) => {
  return {
		initialValues: {
			code: "",
		},
		validationSchema: Yup.object({
			code: Yup.string()
				.required("Required"),
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSubmit: () => {
			onSubmit && onSubmit();
		},
  };
};
