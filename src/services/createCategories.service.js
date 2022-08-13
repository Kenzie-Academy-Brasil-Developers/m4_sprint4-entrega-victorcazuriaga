import database from "../database";
const createCategoriesService = async (data) => {
  console.log(data.categories, "", "createCategoriesServices");
  console.log(Object.values(data, "", "createCategoriesServices"));
  const createCategoriesDb = await database.query(
    `INSERT INTO categories(name)
        VALUES($1)
        RETURNIRING *;
        `,
    [data.categories]
  );
  console.log(createCategoriesDb);
  // return createCategoriesDb.row[0];
};
export default createCategoriesService;
