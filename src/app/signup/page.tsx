"use client";

import { useCallback } from "react";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button/Button";
import { Textfield } from "@components/Textfield/TextField";
import { Box, useTheme } from "@mui/material";
import { Link } from "@components/Link/Link";
import { Logo } from "@components/Logo/Logo";
import { schema } from "./signup.validation";
import { SignupLink, Subtitle, Title } from "./signup.styles";
import { api } from "src/api/api";

export default function Login() {
  const { palette } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await api.post("/signup", data);
        console.log(data);
        enqueueSnackbar(
          "Usuário cadastrado! Você será redirecionado para a tela de login",
          {
            variant: "success",
            onClose: () => {
              window.location.href = "/signin";
            },
          }
        );

        return;
      } catch (e) {
        if (e instanceof AxiosError) {
          enqueueSnackbar(
            e.response?.data.error ??
              "Algo deu errado... Tente novamente em alguns segundos.",
            { variant: "error" }
          );
        }
      }
    },
    [enqueueSnackbar]
  );

  return (
    <main className="w-screen h-screen pt-[5%]">
      <form className="w-[500px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Box m="0 auto 10px auto" display="flex" justifyContent="center">
          <Logo sx={{ fontSize: "4rem", color: palette.primary.main }} />
        </Box>
        <Title variant="h1">Cadastro</Title>
        <Subtitle variant="body2">Preencha as informações abaixo.</Subtitle>
        <Textfield
          label="Nome"
          placeholder="Digite o seu nome"
          errorMsg={errors.firstName?.message?.toString()}
          {...register("firstName", { required: true })}
        />
        <Textfield
          label="Sobrenome"
          placeholder="Digite o seu sobrenome"
          errorMsg={errors.lastName?.message?.toString()}
          {...register("lastName", { required: true })}
        />
        <Textfield
          label="E-mail"
          placeholder="Digite o seu melhor e-mail"
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
        <Button label="Cadastrar" />
        <SignupLink variant="caption">
          Já tem conta? <Link href="/signin">Entrar!</Link>
        </SignupLink>
      </form>
    </main>
  );
}
