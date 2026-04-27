export async function getFoods(category = "all", search = "") {
  let url = `http://localhost:5000/foods?category=${category}`;

  if (search.trim() !== "") {
    url += `&search=${search}`;
  }

  const res = await fetch(url);
  return res.json();
}