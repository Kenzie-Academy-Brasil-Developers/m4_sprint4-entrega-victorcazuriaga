import * as yup from "yup";
const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.string(),
});

export default productSchema;
