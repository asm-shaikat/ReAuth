const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md shadow-2xl bg-base-100 p-8 rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>

        <form>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-primary link link-hover">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
