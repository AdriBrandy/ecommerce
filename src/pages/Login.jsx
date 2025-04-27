import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen  flex p-7 justify-center bg-gradient-to-b from-gray-900 via-indigo-300 to-indigo-900">
        <div className="m-7 max-h-115 max-w-70  rounded-xl border border-zinc-200 bg-white ring-4 ring-zinc-300/25">
          <div className="flex grow items-center px-6 py-10 sm:px-10 sm:py-4">
            <div className="grow">
              <div className="text-center">
                <h1 className="text-3xl font-extrabold">
                  Bienvenidx a SkillBoost
                </h1>
                <h2 className="mt-1 text-sm leading-relaxed text-zinc-600">
                  ¿No tienes una cuenta?{" "}
                  <a
                    href="/createaccount"
                    className="text-sm text-zinc-800 underline decoration-slate-300 underline-offset-2 hover:text-zinc-900"
                  >
                    Crea una nueva cuenta
                  </a>
                </h2>
              </div>
              <form className="mt-2 flex flex-col gap-2 sm:gap-2">
                
                <div className="space-y-1">
                  <label
                    for="email"
                    className="inline-block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    for="password"
                    className="inline-block text-sm font-medium"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                
                <button
                  type="submit"
                  className="mt-7 mb-7 flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800 px-4 py-3 text-sm leading-5 font-medium text-white hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-zinc-500/50 focus:outline-hidden active:border-zinc-700 active:bg-zinc-700"
                >
                  Registrase
                </button>
                <div className="text-center text-xs font-medium text-zinc-500">
                  SkillBoost &copy; {new Date().getFullYear()}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
