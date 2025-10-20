import { FormInput, SubmitBtn } from "./index";
import { Form } from "react-router-dom";
const CheckoutForm = () => {
  return (
    <Form method="POST">
      <h2 className="text-xl capitalize mb-4">shipping information</h2>
      <FormInput
        type="text"
        inputName="name"
        label="first name"
        size="input-lg"
      />
      <FormInput
        type="text"
        inputName="address"
        label="address"
        size="input-lg"
      />
      <SubmitBtn size="btn-md" text="place your order" />
    </Form>
  );
};

export default CheckoutForm;
