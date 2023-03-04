import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("authToken") || false
  );
  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const userid = localStorage.getItem("userid");
  const username = localStorage.getItem("username");
  const userage = localStorage.getItem("userage");
  const useremail = localStorage.getItem("useremail");
  const usercity = localStorage.getItem("usercity");
  const usergender = localStorage.getItem("usergender");

  const handleLogin = (e, user) => {
    e.preventDefault();

    let { email, password } = user;
    if (email.includes("@sastadeal.com")) {
      if (email && password) {
        fetch("https://enchanting-gold-tie.cyclic.app/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.msg === "Login success") {
              localStorage.setItem("authToken", data.token);
              toast({
                description: "Admin Login Successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/admin", { replace: true });
            } else if (data.msg === "Invaild credentials") {
              toast({
                description: "Invaild credentials",
                status: "error",
                duration: 1000,
                isClosable: true,
              });
              navigate("/login", { replace: true });
            }
          })
          .catch((err) => console.log(err));
        // toast({
        //     description: 'Invaild credentials',
        //     status: 'error',
        //     duration: 1000,
        //     isClosable: true,
        // })
      } else {
        alert("Please Sign Up first");
      }
    } else {
      if (email && password) {
        fetch("https://erin-average-antelope.cyclic.app/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.msg === "Login success") {
              localStorage.setItem("authToken", data.token);
              toast({
                description: "Login Successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/", { replace: true });
            } else if (data.msg === "Invaild credentials") {
              toast({
                title: "An error occurred.",
                description: "Invaild credentials",
                status: "error",
                duration: 1000,
                isClosable: true,
              });
              navigate("/login", { replace: true });
            }
          })
          .catch((err) => console.log(err));
        // toast({
        //   description: "Invaild credentials",
        //   status: "error",
        //   duration: 1000,
        //   isClosable: true,
        // });
      } else {
        alert("Please Sign Up first");
      }
    }
  };

  const handleSignup = (e, user) => {
    e.preventDefault();

    let { name, age, email, password, gender, city } = user;
    if (name && age && email && password && gender && city) {
      fetch("https://erin-average-antelope.cyclic.app/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("userid", JSON.stringify(data.user._id));
          localStorage.setItem("username", JSON.stringify(data.user.name));
          localStorage.setItem("userage", JSON.stringify(data.user.age));
          localStorage.setItem("usercity", JSON.stringify(data.user.city));
          localStorage.setItem("useremail", JSON.stringify(data.user.email));
          localStorage.setItem("usergender", JSON.stringify(data.user.gender));

          if (data.msg === "User registered.") {
            toast({
              description: "Registered Sucessfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });

            navigate("/login");
          } else if (data.msg === "Please login, user already exist") {
            toast({
              description: "Please login, user already exist",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            // alert(data.msg);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please provide all fields.");
    }
  };

  const data = {
    isAuth,
    handleLogin,
    handleSignup,
  };
  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export default AppcontextProvider;
