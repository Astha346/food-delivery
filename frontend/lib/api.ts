export async function getFoods(
  category: string = "all",
  search: string = ""
) {
  const res = await fetch("http://localhost:5000/foods");

  if (!res.ok) {
    throw new Error("Failed to fetch foods");
  }

  const data = await res.json();

  // 🔥 filter in frontend
  return data.filter((food: any) => {
    const matchCategory =
      category === "all" || food.category === category;

    const matchSearch =
      food.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });
}