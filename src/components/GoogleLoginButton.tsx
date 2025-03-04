import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

type GoogleLoginButtonProps = {
  onLoginSuccess: (user: any) => void;
};

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onLoginSuccess,
}) => {
  const handleSuccess = async (response: CredentialResponse) => {
    const { credential } = response;
    const decoded = jwtDecode(credential); // Decode JWT for user info

    try {
      const backendResponse = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: credential }),
      });

      const data = await backendResponse.json();
      console.log("Backend Response:", data.user);
      localStorage.setItem("email", JSON.stringify(data.user.email));
      localStorage.setItem("name", JSON.stringify(data.user.name));
      localStorage.setItem("picture", JSON.stringify(data.user.picture));
      onLoginSuccess(data.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />;
};

export default GoogleLoginButton;
