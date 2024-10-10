import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="bg-[#F8F7F6]">
        <div
          className="h-screen bg-no-repeat bg-left-bottom"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/enabled_hi/564x/6b/34/d9/6b34d947b883f1e2523100a155b1661f.jpg)",
          }}
        >
          <div className="flex flex-col items-center justify-center georgian_font pt-8">
            <h1 className="text-9xl">404</h1>

            <p className="text-xl my-4">Something goes wrong!!</p>

            <Link
              to="/"
              className="bg-white px-12 py-2 input input-bordered hover:bg-[#F8F7F6] flex items-center"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
