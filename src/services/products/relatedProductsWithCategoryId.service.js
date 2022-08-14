import database from "../../database";

const relatedProductsWithCategoryIdService = async (id) => {
  try {
    const relatedProductsWithCategoryIdDb = await database.query(
      `
  SELECT PR.name FROM categories CT
JOIN products PR ON CT.id = PR.category_id
WHERE CT.id = $1;
`,
      [id]
    );
    console.log(relatedProductsWithCategoryIdDb.rows);
    return relatedProductsWithCategoryIdDb.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default relatedProductsWithCategoryIdService;
