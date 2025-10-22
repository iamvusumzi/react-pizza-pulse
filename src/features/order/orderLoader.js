import { getOrder } from "../../services/apiRestaurant";

export async function loader({ params }) {
  const { orderId } = params;
  const order = await getOrder(orderId);
  return order;
}
