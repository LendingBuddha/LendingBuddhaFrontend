import '../login/login.css'

function Login() {
  return (

    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
                <img src="{{ url_for('static',filename='#') }}" alt="image" />
            </div>

            <form className="login100-form validate-form" method="POST">
                <span className="login100-form-title">
					LOG IN
				</span>
              


{/* Email Address */}
                
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="email" name="email" id="email" placeholder="Email" />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
						<i class="fa fa-envelope" aria-hidden="true"></i>
					</span>
                </div>

{/* password */}

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" name="passw" id="passw" placeholder="Password" />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
						<i class="fa fa-lock" aria-hidden="true"></i>
					</span>
                </div>

{/* login button */}
                
                <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">
						Login
					</button>
                </div>

{/* forget password */}
<div class="container-forget100-form-btn">
                    <button type="submit" className="forget100-form-btn">
						Forget Password
					</button>
                </div>

{/* Register account */}

                <div className="text-center p-t-90">
                    Don't have an account?
                    <a className="txt3" href="#">
						Register now.
					</a>
                </div>
            </form>
        </div>
    </div>
</div>

  );
}

export default Login;
