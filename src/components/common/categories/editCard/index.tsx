"use client";

import Image from "next/image";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";

import { Container } from "./styles";
import { Categories } from "@/models/menuModel";
import { handleDelete } from "@/components/infra/fetch-logic/categories";
import { UpdateCategoryModal } from "@/app/kitchen/categories/updateCategoryModal";

interface CategoryEditCardProps {
  category: Categories;
  mutateDelete: UseMutateFunction<{}, Error, string, unknown>;
}

export async function CategoryEditCard({
  category,
  mutateDelete,
}: CategoryEditCardProps) {
  const { name, image_url: imageUrl, id: categoryId } = category;
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container $image_url={imageUrl}>
      <div id="options" onClick={() => setOpen(!open)}>
        <Image src="/dots-vertical.svg" alt="edit" width={24} height={24} />
      </div>

      {openModal && (
        <UpdateCategoryModal
          categoryData={category}
          setOpenModal={setOpenModal}
          id={categoryId}
        />
      )}

      {open && (
        <aside>
          <p
            onClick={() =>
              handleDelete({ mutate: mutateDelete, id: categoryId })
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
