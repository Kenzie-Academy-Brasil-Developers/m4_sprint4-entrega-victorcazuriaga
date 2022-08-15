import database from "../../database";

const listProductsService = async () => {
  try {
    const listProductsDb = await database.query(`
            SELECT name FROM products;
            `);
    console.log(listProductsDb.rows, "teste");
    return listProductsDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsService;
