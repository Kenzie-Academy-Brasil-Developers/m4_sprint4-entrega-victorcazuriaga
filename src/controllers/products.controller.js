import createProductService from "../services/products/createProduct.service";
import deletedProductByIdService from "../services/products/deletedProductById.service";
import listProductsService from "../services/products/listAllProducts.service";
import listProductByIdService from "../services/products/listProductById.service";
import relatedProductsWithCategoryIdService from "../services/products/relatedProductsWithCategoryId.service";
import updatedProductByIdService from "../services/products/updatedProductById.service";
import updatedNameCategoryIdService from "../services/updatedNameCategoryId.service";

const createProductController = async (request, response) => {
  try {
    const data = request.body;
    const [createProduct] = await createProductService(data);
    return response
      .status(201)
      .json({
        message: "Produto cadastrado com sucesso ",
        product: createProduct,
      });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const listAllProductsController = async (request, response) => {
  try {
    const listAllProducts = await listProductsService();
    return response.status(200).json(listAllProducts);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};
const listProductByIdController = async (request, response) => {
  try {
    const id = request.params.id;
    console.log(id);
    const [listAllProducts] = await listProductByIdService(id);
    return response.status(200).json(listAllProducts);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};
const updatedProductByIdController = async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    const [updatedProductById] = await updatedProductByIdService(id, data);
    console.log(updatedProductById);
    return response.status(200).json(updatedProductById);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

const deletedProductByIdController = async (request, response) => {
  try {
    const id = request.params.id;
    const [deletedProductById] = await deletedProductByIdService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

const relatedProductsWithCategoryIdController = async (request, response) => {
  try {
    const categoryId = request.params.id;
    const [relatedProductsWithCategoryId] =
      await relatedProductsWithCategoryIdService(categoryId);

    return response.status(200).json(relatedProductsWithCategoryId);
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

export {
  createProductController,
  listAllProductsController,
  listProductByIdController,
  deletedProductByIdController,
  relatedProductsWithCategoryIdController,
  updatedProductByIdController,
};
