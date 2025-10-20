import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import {
  SectionTitle,
  OrdersList,
  Loading,
  ComplexPagination,
} from "../components";
import { toast } from "react-toastify";
import { customFetch } from "../utiles";

const getOrdersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("you need to log it");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureDataQuery(
        getOrdersQuery(params, user)
      );
      return {
        orders: response?.data?.data,
        meta: response?.data?.meta,
      };
    } catch (error) {
      const message =
        error?.response?.data?.error?.message || "something went wrong !";
      toast.error(message);
      if (error?.response?.status === 401 || 403) return redirect("/");
      return null;
    }
  };

const Orders = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const { meta } = useLoaderData();
  if (meta.pagination.total < 1)
    return <SectionTitle text="please make an order" />;
  return (
    <>
      <SectionTitle text="your orders" />
      {isPageLoading ? <Loading /> : <OrdersList />}
      <ComplexPagination />
    </>
  );
};

export default Orders;
