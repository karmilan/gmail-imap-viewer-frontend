import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    navigate("/", { state: { user: userData } }); // Redirect after login
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 flex flex-col items-center justify-center p-4">
        {/* <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"> */}
        <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
          <div className="max-w-lg w-full space-y-8 text-center">
            <MdMailOutline className="mx-auto h-16 w-16 text-blue-500" />

            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome to Gmail IMAP Viewer
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Access your emails securely with your Google account
            </p>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            {/* <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </button> */}
            <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;
