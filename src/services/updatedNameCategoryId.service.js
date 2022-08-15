import database from "../database";

const updatedNameCategoryIdService = async (id, data) => {
  try {
    const updatedNameCategoryDb = await database.query(
      `
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING * 
          `,
      [data.categories, id]
    );
    return updatedNameCategoryDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default updatedNameCategoryIdService;
