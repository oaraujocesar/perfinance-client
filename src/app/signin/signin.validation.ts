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
      .min(8, "A senha deve conter no mínimo 8 caracteres"),
  })
  .required();

export interface SigninData {
  email: string;
  password: string;
}