import * as yup from "yup";

const formValidation = yup.object().shape({
  firstName: yup.string()
    .required('First name is a required field'),
  lastName: yup.string()
    .required('Surname is a required field'),
  email: yup.string()
    .email("Invalid email address")
    .required("Email is a required"),
  age: yup.number().typeError('must be a number')
    .required('Enter your age please')
    .min(1)
});

export { formValidation }