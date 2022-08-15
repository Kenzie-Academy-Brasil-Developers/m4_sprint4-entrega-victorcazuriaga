import database from "../database";

const listCategoriesService = async (data) => {
  try {
    if (!data) {
      const listCategories = await database.query(
        `SELECT name FROM categories
      
      `
      );
      console.log(listCategories.rows);
      return listCategories.rows;
    }
    const listCategories = await database.query(
      `SELECT name FROM categories
    WHERE id = $1
    `,
      [data]
    );
    console.log(listCategories.rows);
    return listCategories.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoriesService;
