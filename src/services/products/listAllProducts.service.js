import database from "../../database";

const listProductsService = async () => {
  try {
    const listProductsDb = await database.query(`
            SELECT name FROM products;
            `);
    return listProductsDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsService;
