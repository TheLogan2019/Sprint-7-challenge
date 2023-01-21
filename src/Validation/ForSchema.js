import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Size is required"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  greenPepper: yup.boolean(),
  blackOlive: yup.boolean(),
  special: yup
    .string()
    .max(120, "Special instructions must be less than 120 characters"),
});

export default schema;
