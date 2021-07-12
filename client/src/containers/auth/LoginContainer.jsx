import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import authLogo from "../../assets/svgs/auth-logo.svg";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useRouter } from "../../utils/useRouter";

const LoginContainer = () => {
  const router = useRouter();

  const responseGoogle = async (res) => {
    // try {
    //   let response = await axios.post(
    //     "/api/users/google",
    //     JSON.stringify({ idToken: res.tokenId })
    //   );
    //   if (response.data.email) {
    //     dispatch({
    //       type: "SET_USER",
    //       user: {
    //         email: response.data.email,
    //         name: response.data.firstName,
    //       },
    //     });
    //     localStorage.setItem(
    //       "user",
    //       JSON.stringify(response.data.email, response.data.firstName)
    //     );
    //     localStorage.setItem("token", response.data.token);
    //     handleCloseLogin();
    //   } else {
    //     alert("Unexpected Error");
    //   }
    // } catch (err) {
    //   if (err.response) {
    //     if (err.response.status === 400) {
    //       alert(err.response.data.error);
    //     } else if (err.response.status === 500) {
    //     }
    //   } else {
    //     alert(err);
    //   }
    // }
  };

  return (
    <div className='login'>
      <div className='login__sidebar'>
        <div className='login__sidebar-logo'>
          <img src={authLogo} alt='authlogo' />
        </div>
        <div className='login__sidebar-links'>
          <p>Don't have an account?</p>
          <Link to='/register' className='login__sidebar-links--auth'>
            Sign Up
          </Link>
        </div>
      </div>
      <div className='login__box'>
        <IconButton onClick={() => router.push("/")} className='close'>
          <Close />
        </IconButton>
        <h1 className='heading heading--primary heading--big'>Sign In</h1>
        <form action='' className='form login__box-form'>
          <div>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText='Continue with Google'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              theme='light'
              cookiePolicy='single_host_origin'
              className='google-login'
            />
            <p className='login-alt-text sideline'>
              <span>or login with email</span>
            </p>
          </div>
          <div className='form__group'>
            <input
              type='email'
              className='form__input'
              placeholder='Email'
              id='email'
              required
            />
            <label for='email' className='form__label'>
              Email
            </label>
          </div>
          <div className='form__group'>
            <input
              type='password'
              className='form__input'
              placeholder='Password'
              id='password'
              required
            />
            <label for='password' className='form__label'>
              Password
            </label>
          </div>
          <button className='button button--primary login__box-form--button'>
            Sign In
          </button>
        </form>

        <div className='login__sidebar-links login__box--mobilelink'>
          <p>Don't have an account?</p>
          <Link to='/register' className='login__sidebar-links--auth'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
