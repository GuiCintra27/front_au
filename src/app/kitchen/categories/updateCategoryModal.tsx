"use client";

import Image from "next/image";
import { AxiosError } from "axios";
import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect } from "react";

import { CategoryForm } from "./categoryForm";
import { Categories } from "@/models/menuModel";
import { errorToast } from "@/components/UI/alerts";
import { useUpdateCategory } from "@/hooks/api/categories";

interface UpdateCategoryModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
  categoryData: Omit<Categories, "id">;
}

export function UpdateCategoryModal({
  setOpenModal,
  id,
  categoryData,
}: UpdateCategoryModalProps) {
  const { mutate, error } = useUpdateCategory(setOpenModal);

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
        <Image
          src="/close-icon.svg"
          alt="close"
          width={40}
          height={40}
          onClick={() => setOpenModal(false)}
        />
        <CategoryForm mutate={mutate} id={id} categoryData={categoryData} />
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
    position: relative;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: fit-content;
    height: fit-content;

    padding: 8rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};

    img {
      position: absolute;

      top: 2rem;
      right: 2rem;

      cursor: pointer;
    }
  }
`;
