export async function placeOrder(orderData: any) {
  const res = await fetch("http://localhost:5000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error("Failed to place order");
  }

  return res.json();
}