"use client";

import { AxiosError } from "axios";
import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect } from "react";

import { CategoryForm } from "./categoryForm";
import { errorToast } from "@/components/UI/alerts";
import { useUpdateCategory } from "@/hooks/api/categories";

export function UpdateCategoryModal({
  setOpenModal,
  id,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}) {
  const { mutate, error } = useUpdateCategory();

  useEffect(() => {
    if (error instanceof AxiosError) {
      const status = error?.response?.status;

      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 404) errorToast("Categoria não encontrada");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [error]);

  return (
    <Container>
      <div className="bg" onClick={() => setOpenModal(false)} />
      <div className="form">
        <CategoryForm mutate={mutate} id={id} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  z-index: 10;

  .bg {
    position: fixed;

    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }

  .form {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: fit-content;
    height: fit-content;

    padding: 8rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
