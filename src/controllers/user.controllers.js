import createCategoriesService from "../services/createCategories.service";

const createCategoriesController = async (request, response) => {
  const data = await request.body;
  const createCategories = await createCategoriesService(data);
  return response.status(200).json({ message: "ok" });
};

export { createCategoriesController };
