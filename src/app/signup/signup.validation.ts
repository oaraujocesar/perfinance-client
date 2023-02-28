import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .required("O e-mail é obrigatório")
      .email("Endereço de e-mail inválido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .test(
        "regex",
        "A senha precisa ter no mínimo 8 caracteres, e ter um caractere especial, 1 letra maiúscula, 1 número e 1 letra minúscula.",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
  })
  .required();

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
}
