"use client";

import Image from "next/image";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";

import { Container } from "./styles";
import { handleDelete } from "@/components/infra/fetch-logic/categories";

interface CategoryEditCardProps {
  imageUrl: string;
  name: string;
  categoryId: string;
  mutateDelete: UseMutateFunction<{}, Error, string, unknown>;
}

export async function CategoryEditCard({
  imageUrl,
  name,
  categoryId,
  mutateDelete,
}: CategoryEditCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container $image_url={imageUrl}>
      <div id="options" onClick={() => setOpen(!open)}>
        <Image src="/dots-vertical.svg" alt="edit" width={24} height={24} />
      </div>

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
          <p>Editar</p>
        </aside>
      )}
      <p>{name}</p>
    </Container>
  );
}
