import * as yup from "yup";

const categoriesSchema = yup.object().shape({
  name: yup.string().required(),
});

export default categoriesSchema;
