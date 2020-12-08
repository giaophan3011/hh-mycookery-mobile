const backend = "http://localhost:5000";

export async function getRecipes() {
  return await fetch(`${backend}/public/v1/recipes`).then((response) => response.json());
}
export async function postRecipes() {
  return await fetch("https://customerrest.herokuapp.com/api/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer), // body data type must match "Content-Type" header
  }).then((response) => response.json());
}
