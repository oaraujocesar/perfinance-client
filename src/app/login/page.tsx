"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button/Button";
import { Textfield } from "@components/Textfield/TextField";
import { schema } from "./login.validation";
import { useSnackbar } from "notistack";
import { Typography } from "@mui/material";
import { Link } from "@components/Link/Link";
import { SignupLink, Subtitle, Title } from "./login.styles";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: any) => {
    console.log(data);
    enqueueSnackbar("Login realizado com sucesso!", { variant: "success" });
  };

  return (
    <main className="w-screen h-screen">
      <form className="w-[500px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Title variant="h1">Bem-vinda ao Perfinance!</Title>
        <Subtitle variant="body2">
          Insira suas credenciais para começar
        </Subtitle>
        <Textfield
          label="E-mail"
          type="email"
          placeholder="email@example.com"
          errorMsg={errors.email?.message?.toString()}
          {...register("email", { required: true })}
        />
        <Textfield
          label="Password"
          type="password"
          placeholder="••••••••"
          errorMsg={errors.password?.message?.toString()}
          {...register("password", { required: true, minLength: 8 })}
        />
        <Button label="Entrar" />
        <SignupLink variant="caption">
          Ainda não tem conta? <Link href="/signup">Cadastre-se!</Link>
        </SignupLink>
      </form>
    </main>
  );
}
