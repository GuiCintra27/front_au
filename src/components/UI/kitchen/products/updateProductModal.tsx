"use client";

import Image from "next/image";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

import { ProductForm } from "./productForm";
import { useUpdateProduct } from "@/hooks/api/products";
import { Categories, ProductData as Products } from "@/models/menuModel";

export function UpdateProductModal({
  setOpenModal,
  id,
  productData,
  categories,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
  productData: Omit<Products, "id">;
  categories: Categories[] | undefined;
}) {
  const { mutate } = useUpdateProduct(setOpenModal);

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
        <ProductForm
          categories={categories}
          mutate={mutate}
          id={id}
          productData={productData}
        />
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
