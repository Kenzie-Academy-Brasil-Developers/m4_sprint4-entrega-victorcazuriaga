import database from "../database";
const createCategoriesService = async (data) => {
  try {
    const createCategoriesDb = await database.query(
      `INSERT INTO categories(name)
        VALUES($1)
        RETURNING *;
        `,
      [data.name]
    );
    console.log(await createCategoriesDb.rows[0], "return function");
    return createCategoriesDb.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default createCategoriesService;
