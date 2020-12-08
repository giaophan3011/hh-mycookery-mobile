const backend = "http://192.168.10.61:5000";

export async function getRecipes() {
  return await fetch(`${backend}/public/v1/recipes`).then((response) => response.json());
}
export async function postRecipe(newRecipe) {
  return await fetch(`${backend}/v1/recipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic dXNlcjoxMjM0NTY3OA==",
    },
    body: JSON.stringify(newRecipe), // body data type must match "Content-Type" header
  }).then((response) => response.json());
}
