import { FormInput, SelectInput, RangeInput, CheckboxInput } from "./index";
import { Form, Link, useLoaderData } from "react-router-dom";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const categories = meta.categories;
  const companies = meta.companies;
  const { search, company, category, shipping, order, price } = params;

  
  return (
    <Form className="bg-base-300 rounded-md px-9 py-5 gap-x-4 gap-y-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
      <FormInput
        type="search"
        inputName="search"
        label="search product"
        size="input-sm"
        defaultValue={search}
      />
      {/* REST OF INPUTS */}
      <SelectInput
        name="category"
        label="select category"
        list={categories}
        size="select-sm"
        defaultValue={category}
      />
      <SelectInput
        name="company"
        label="select company"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />
      <SelectInput
        name="order"
        label="sort by"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* WIERD PRICE BAR */}
      <RangeInput
        label="select price"
        name="price"
        size="range-sm"
        value={price}
      />
      {/* SHIPPING CHECK-BOX */}
      <CheckboxInput
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        shippingValue={shipping}
      />
      {/* BUTTONS */}
      <button
        type="submit"
        className="btn btn-primary btn-sm  text-md uppercase tracking-wider self-center"
      >
        search
      </button>
      <Link
        to="/products"
        className="btn btn-accent btn-sm  text-md uppercase tracking-wider text-base-300 self-center"
      >
        reset
      </Link>
    </Form>
  );
};

export default Filters;
