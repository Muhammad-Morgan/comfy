import { FeaturedProducts, Hero, Loading } from "../components";
import { useNavigation } from "react-router-dom";
import { customFetch } from "../utiles";

const featuredURL = "/products?featured=true";
export const loader = async () => {
  try {
    const response = await customFetch(featuredURL);
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
