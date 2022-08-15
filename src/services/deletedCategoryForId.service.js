import database from "../database";

const deletedCategoryForIdService = async (id) => {
  try {
    const deletedCategoryForIdDb = await database.query(
      `
        DELETE FROM categories
        WHERE id = $1
        RETURNING * 
        `,
      [id]
    );
    return deletedCategoryForIdDb.row;
  } catch (error) {
    throw new Error(error);
  }
};

export default deletedCategoryForIdService;
