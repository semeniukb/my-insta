import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 items-center justify-center flex-col py-10">
            <Outlet />
          </section>

          <img
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            src="/assets/images/side-img.svg"
            alt="logo"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
