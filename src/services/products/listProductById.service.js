import database from "../../database";

const listProductByIdService = async (id) => {
  try {
    const listProductByIdDb = await database.query(
      `
            SELECT name FROM products
                WHERE id = $1
    `,
      [id]
    );
    return listProductByIdDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default listProductByIdService;
