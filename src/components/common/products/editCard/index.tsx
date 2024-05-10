"use client";

import Image from "next/image";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";

import { Container } from "./styles";
import { Categories, ProductData } from "@/models/menuModel";
import { handleDelete } from "@/components/infra/fetch-logic/products";
import { UpdateProductModal } from "@/app/kitchen/products/updateProductModal";

interface ProductEditCardProps {
  product: ProductData;
  categories: Categories[] | undefined;
  mutateDelete: UseMutateFunction<{}, Error, string, unknown>;
}

export function ProductEditCard({
  categories = [],
  product,
  mutateDelete,
}: ProductEditCardProps) {
  const { name, image_url: imageUrl, id: productId } = product;
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container $image_url={imageUrl}>
      <div id="options" onClick={() => setOpen(!open)}>
        <Image src="/dots-vertical.svg" alt="edit" width={24} height={24} />
      </div>

      {openModal && (
        <UpdateProductModal
          categories={categories}
          productData={product}
          setOpenModal={setOpenModal}
          id={productId}
        />
      )}

      {open && (
        <aside>
          <p
            onClick={() =>
              handleDelete({ mutate: mutateDelete, id: productId })
            }
          >
            Excluir
          </p>
          <div className="separator" />
          <p onClick={() => setOpenModal(true)}>Editar</p>
        </aside>
      )}
      <p>{name}</p>
    </Container>
  );
}
