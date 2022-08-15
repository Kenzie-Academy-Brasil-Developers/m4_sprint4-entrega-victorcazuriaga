import database from "../../database";

const relatedProductsWithCategoryIdService = async (id) => {
  try {
    const relatedProductsWithCategoryIdDb = await database.query(
      `
  SELECT PR.name, CT.name AS "category" FROM categories CT
JOIN products PR ON CT.id = PR.category_id
WHERE CT.id = $1;
`,
      [id]
    );
    return relatedProductsWithCategoryIdDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default relatedProductsWithCategoryIdService;
