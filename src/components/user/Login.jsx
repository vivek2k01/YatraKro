import { motion } from "framer-motion";
import flight from "../../assets/flight1.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Poppins, sans-serif;
        }

        body {
          margin: 0;
        }

        .login-page {
          min-height: 100vh;
          width: 100%;
          background:
            linear-gradient(
              rgba(20, 30, 80, 0.45),
              rgba(20, 30, 80, 0.45)
            ),
            url(${flight});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 40px;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 24px;

          /* ✅ PALE GRADIENT (Tailwind equivalent) */
          background: linear-gradient(
            to bottom,
            #e0f2fe,
            #ffffff,
            #eff6ff
          );

          box-shadow: 0 30px 70px rgba(0,0,0,0.25);
          backdrop-filter: blur(10px);
        }

        .login-card h2 {
          margin-bottom: 6px;
          color: #2d2f48;
          font-size: 26px;
        }

        .login-card p {
          margin-bottom: 28px;
          color: #6f7390;
          font-size: 14px;
        }

        .login-card input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #e4e6f2;
          margin-bottom: 18px;
          font-size: 14px;
          outline: none;
          background: #ffffff;
        }

        .login-card input:focus {
          border-color: #6b7cff;
        }

        .btn {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #6b7cff, #8fa2ff);
          color: #fff;
          font-size: 15px;
          cursor: pointer;
        }

        .switch {
          text-align: center;
          margin-top: 18px;
          font-size: 14px;
          color: #6f7390;
        }

        .switch span {
          color: #6b7cff;
          cursor: pointer;
          font-weight: 500;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .login-page {
            justify-content: center;
            padding: 20px;
          }

          .login-card {
            padding: 30px 24px;
          }
        }
      `}</style>

      <div className="login-page">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Welcome Back</h2>
          <p>Continue your peaceful journey</p>

          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button className="btn">Login</button>

          <Link to="/signup" className="switch">
            <div className="switch">
              New here? <span>Create account</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
