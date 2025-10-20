import { customFetch } from "../utiles";
import { useNavigation } from "react-router-dom";
import {
  Filters,
  ProductsContainer,
  PaginationContainer,
  Loading,
} from "../components";

const getAllProductsQuery = (queryParams) => {
  const { search, company, category, shipping, order, price } = queryParams;
  return {
    queryKey: [
      "allproducts",
      search ?? "",
      company ?? "",
      category ?? "",
      shipping ?? "",
      order ?? "",
      price ?? "",
    ],
    queryFn: () => customFetch(url, { params }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = "/products";
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureDataQuery(
      getAllProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;

    return { meta, products, params };
  };

const Products = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Filters />
      {isPageLoading ? <Loading /> : <ProductsContainer />}
      <PaginationContainer />
    </>
  );
};

export default Products;
