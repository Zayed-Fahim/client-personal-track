import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import RegistrationForm from "../../smallComponents/Home/RegistrationForm";
import { useNavigate } from "react-router-dom";
import GLOBE from "vanta/dist/vanta.globe.min";
import useTheme from "../../../hooks/useTheme";

const Register = ({ setIsRedirect }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  // vanta effect
  const myRef = useRef(null);
  const vantaRef = useRef(null);
  const initVantaEffect = () => {
    vantaRef.current = GLOBE({
      el: myRef.current,
      backgroundColor: theme === "dark" ? "#0f172a" : "#fff",
      color2: theme === "dark" ? "#fff" : "#0f172a",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1,
      size: 1,
    });
  };
  const destroyVantaEffect = () => {
    if (vantaRef.current) {
      vantaRef.current.destroy();
      vantaRef.current = null;
    }
  };
  useEffect(() => {
    initVantaEffect();
    return () => {
      destroyVantaEffect();
    };
  }, [theme]);
  const { handleGoogleLogin, handleGitHubLogin } = useAuth();
  // implement sign-up functionality using firebase authentication (google and github)
  const googleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const success = await handleGoogleLogin();
      if (success) {
        toast.dismiss(toastId);
        toast.success("Account creation successful. Enjoy!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => setIsRedirect(true), 1500);
        setTimeout(() => {
          navigate("/auth/login");
          setIsRedirect(false);
        }, 3000);
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.dismiss(toastId);
        toast.error("Cancelled the login process", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.dismiss(toastId);
        toast.error("Authentication Error", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };
  const githubLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      await handleGitHubLogin();
      toast.dismiss(toastId);
      toast.success("Account creation successful. Enjoy!");
    } catch (error) {
      if (error.code === "auth/user-cancelled") {
        toast.dismiss(toastId);
        toast.error("Cancelled the login process", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.dismiss(toastId);
        toast.error("Authentication Error", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };
  return (
    <div className="py-[109px]" ref={myRef}>
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-[#0F172A] dark:bg-white rounded-t-lg p-8">
          <p className="text-center text-sm text-gray-400 font-light">
            Sign up with
          </p>
          <div>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <button
                onClick={githubLogin}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                Github
              </button>
              <button
                onClick={googleLogin}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#e53935"
                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1565c0"
                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Or sign up with credentials
          </p>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
