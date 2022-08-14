import database from "../../database";

const createProductService = async (data) => {
  try {
    const createProductDb = await database.query(
      `INSERT INTO products(name,price,category_id)
        VALUES($1, $2, $3)
        RETURNING *`,
      [data.name, data.price, data.category_id]
    );
    return createProductDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
