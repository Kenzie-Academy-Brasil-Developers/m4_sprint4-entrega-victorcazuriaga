import createCategoriesService from "../services/createCategories.service";
import deletedCategoryForIdService from "../services/deletedCategoryForId.service";
import listCategoriesService from "../services/listCategories.service";
import updatedNameCategoryIdService from "../services/updatedNameCategoryId.service";

const createCategoriesController = async (request, response) => {
  try {
    const data = request.body;
    const createCategories = await createCategoriesService(data);
    return response.status(201).json({
      message: "Categoria cadastrado com sucesso",
      category: createCategories,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};
const listCategoriesController = async (request, response) => {
  try {
    const listCategories = await listCategoriesService();
    console.log(listCategories);
    return response.status(200).json(listCategories);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};
const retrivedCategoryIdController = async (request, response) => {
  try {
    const id = request.params.id;
    const [retrivedCategoryId] = await listCategoriesService(id);
    return response.status(200).json(retrivedCategoryId);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const updatedNameCategoryIdController = async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    const [updatedNameCategoryId] = await updatedNameCategoryIdService(
      id,
      data
    );
    return response
      .status(200)
      .json({
        message: "Categoria atualizada com sucesso",
        category: updatedNameCategoryId,
      });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const deletedCategoryForIdController = async (request, response) => {
  try {
    const id = request.params.id;
    console.log(id);
    const deletedCategoryForId = await deletedCategoryForIdService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export {
  createCategoriesController,
  listCategoriesController,
  retrivedCategoryIdController,
  updatedNameCategoryIdController,
  deletedCategoryForIdController,
};
