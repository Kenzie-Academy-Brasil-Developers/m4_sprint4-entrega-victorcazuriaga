import database from "../database";

const productExistMiddleware = async (request, response, next) => {
  const id = request.params.id;

  const verifyExistProduct = await database.query(
    `SELECT * FROM products
            WHERE id = $1
        `,
    [id]
  );
  if (!verifyExistProduct.rows[0]) {
    return response.status(400).json({ message: "Produto não existe" });
  }
  next();
};

export default productExistMiddleware;
