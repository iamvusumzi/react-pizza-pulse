import { useDispatch } from "react-redux";
import { deleteFromCart } from "./cartSlice";
import Button from "../../ui/Button";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(deleteFromCart(id))} type="small">
        Remove
      </Button>
    </div>
  );
}

export default DeleteItem;
