import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be min 8 characters"),
    //   .test(
    //     "regex",
    //     "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
    //     (val) => {
    //       let regExp = new RegExp(
    //         "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
    //       );
    //       console.log(regExp.test(val), regExp, val);
    //       return regExp.test(val);
    //     }
    //   ),
  })
  .required();
