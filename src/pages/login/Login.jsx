import '../login/login.css'

function Login() {
  return (

    <div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src="{{ url_for('static',filename='') }}" alt="image" />
            </div>

            <form class="login100-form validate-form" method="POST">
                <span class="login100-form-title">
					LOG IN
				</span>

                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="uname" id="uname" placeholder="Username" />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
						<i class="fa fa-envelope" aria-hidden="true"></i>
					</span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="passw" id="passw" placeholder="Password" />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
						<i class="fa fa-lock" aria-hidden="true"></i>
					</span>
                </div>

                <div class="container-login100-form-btn">
                    <button type="submit" class="login100-form-btn">
						Login
					</button>
                </div>

                <div class="text-center p-t-90">
                    Don't have an account?
                    <a class="txt3" href="register">
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
