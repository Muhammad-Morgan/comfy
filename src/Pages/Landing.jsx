import { FeaturedProducts, Hero, Loading } from "../components";
import { useNavigation } from "react-router-dom";
import { customFetch } from "../utiles";

const featuredURL = "/products?featured=true";

const featuredQuery = {
  queryKey: ["featuredproducts"],
  queryFn: () => customFetch(featuredURL),
};

export const loader = (queryClient) => async () => {
  try {
    const response = await queryClient.ensureQueryData(featuredQuery);
    const products = response.data.data;
    return { products };
  } catch (error) {
    console.log(error.response.msg);
  }
};

const Landing = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Hero />
      {isPageLoading ? <Loading /> : <FeaturedProducts />}
    </>
  );
};

export default Landing;
