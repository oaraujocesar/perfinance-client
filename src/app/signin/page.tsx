"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button/Button";
import { Textfield } from "@components/Textfield/TextField";
import { schema } from "./login.validation";
import { useSnackbar } from "notistack";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "@components/Link/Link";
import { SignupLink, Subtitle, Title } from "./login.styles";
import { Logo } from "@components/Logo/Logo";
import { api } from "src/api/api";
import { useCallback } from "react";

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
        await api.post("/signin", data);
        console.log(data);
        enqueueSnackbar("Login realizado com sucesso!", { variant: "success" });

        return;
      } catch (e) {
        enqueueSnackbar("Erro ao realizar login!", { variant: "error" });

        return;
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
        <Title variant="h1">Bem-vinda ao Perfinance!</Title>
        <Subtitle variant="body2">
          Insira suas credenciais para começar
        </Subtitle>
        <Textfield
          label="E-mail"
          placeholder="email@exemplo.com"
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
