import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, data, statusText } = useRouteError();
  if (status === 404) {
    return (
      <aside className="h-screen grid items-center">
        <div className="mx-auto grid justify-items-center">
          <h1 className="text-9xl  font-medium text-primary tracking-wide">
            404
          </h1>
          <h3 className="text-slate-700 font-bold text-3xl sm:text-5xl mt-4 tracking-tight">
            page not found
          </h3>
          <p className="mt-6 text-slate-600  tracking-tight text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link className="rounded-xl btn btn-lg btn-secondary" to="/">
              Go Back Home
            </Link>
          </div>
        </div>
      </aside>
    );
  }
  console.log(data,status);
  return (
    <aside className="h-screen grid items-center tracking-wide">
      <div className="mx-auto">
        <h1 className="text-3xl text-slate-800">There was an error...</h1>
      </div>
    </aside>
  );
};

export default Error;
