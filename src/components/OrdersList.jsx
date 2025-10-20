import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="text-md mb-4 lg:text-lg capitalize">
        total orders: {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra [&_th]:font-normal">
          <thead>
            <tr>
              <th className="w-1/5">Name</th>
              <th className="w-1/5">Address</th>
              <th className="w-1/5">Products</th>
              <th className="w-1/5">Cost</th>
              <th className="hidden sm:block w-3/5">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { address, name, orderTotal, numItemsInCart, createdAt } =
                order.attributes;
              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY ");
              return (
                <tr key={id}>
                  <th>{name}</th>
                  <th>{address}</th>
                  <th>{numItemsInCart}</th>
                  <th>{orderTotal}</th>
                  <th className="hidden sm:block">{date}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
