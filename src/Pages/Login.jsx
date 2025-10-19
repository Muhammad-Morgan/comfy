import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Features/User/userSlice";
import { customFetch } from "../utiles";
import { toast } from "react-toastify";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in !");
      return redirect("/");
    } catch (error) {
      const message =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(message);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGuestLogin = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("logged in !");
      return navigate("/");
    } catch (error) {
      const message =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(message);
      return null;
    }
  };

  return (
    <section className="grid min-h-screen place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 w-96 shadow-xl rounded-lg"
      >
        <h2 className="card-title mx-auto mt-10 mb-3 text-4xl text-base-content/80">
          Login
        </h2>
        <div className="card-body gap-y-6">
          <FormInput type="email" inputName="identifier" label="email" />
          <FormInput type="password" label="password" inputName="password" />
          <div className="card-actions">
            <SubmitBtn text="login" />
            <button
              onClick={handleGuestLogin}
              type="button"
              className="btn btn-secondary btn-block uppercase mt-2"
            >
              guest user
            </button>
          </div>
          <footer className="mb-4">
            <p className="tracking-wide pl-2">
              Not a member yet?{" "}
              <Link to="/register" className="link-hover link-primary">
                Register
              </Link>
            </p>
          </footer>
        </div>
      </Form>
    </section>
  );
};

export default Login;
