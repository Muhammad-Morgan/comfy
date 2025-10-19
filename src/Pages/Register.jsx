import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utiles";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfuly");
    return redirect("/");
  } catch (error) {
    const message = error?.response?.data?.error?.message || "check your credentials";
    toast.error(message);
    return null;
  }
};
const Register = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 w-96 shadow-xl rounded-lg"
      >
        <h2 className="card-title mx-auto mt-10 mb-3 text-4xl text-base-content/80">
          Register
        </h2>
        <div className="card-body gap-y-5">
          <FormInput
            label="username"
            type="text"
            inputName="username"
          />
          <FormInput
            label="email"
            type="email"
            inputName="email"
          />
          <FormInput
            label="password"
            type="password"
            inputName="password"
          />
          <div className="card-actions">
            <SubmitBtn text="register" />
          </div>
          <footer className="mb-2">
            <p className="tracking-wide pl-2">
              Already a member?{" "}
              <Link to="/login" className="link-primary link-hover">
                Login
              </Link>
            </p>
          </footer>
        </div>
      </Form>
    </section>
  );
};

export default Register;
