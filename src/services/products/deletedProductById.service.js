import database from "../../database";

const deletedProductByIdService = async (id) => {
  try {
    const deletedProductByIdDb = await database.query(
      `
    DELETE FROM products
    WHERE id = $1
    RETURNING * 
    `,
      [id]
    );
    return deletedProductByIdDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default deletedProductByIdService;
