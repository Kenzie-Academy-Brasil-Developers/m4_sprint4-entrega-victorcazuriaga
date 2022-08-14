import database from "../database";

const categoryExistMiddleware = async (request, response, next) => {
  const id = request.params.id;
  const verifyCategoryExistDb = await database.query(
    `SELECT * FROM categories
      WHERE id = $1

          `,
    [id]
  );

  if (!verifyCategoryExistDb.rows[0]) {
    return response.status(400).json({ message: "Categoria não existe" });
  }
  next();
};

export default categoryExistMiddleware;
