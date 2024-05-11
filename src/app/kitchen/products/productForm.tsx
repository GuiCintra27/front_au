"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/common/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productsSchema } from "@/validations/createAndUpdateProduct";
import {
  ProductData as Products,
  DayShift,
  Categories,
} from "@/models/menuModel";
import {
  handleCreateForm,
  handleUpdateForm,
} from "@/components/infra/fetch-logic/products";

export function ProductForm({
  mutate,
  id,
  productData,
  categories = [],
}: {
  mutate: any;
  categories: Categories[] | undefined;
  id?: string;
  productData?: Omit<Products, "id">;
}) {
  const defaultCategories = [
    { name: "Selecione uma categoria", id: "" },
    ...categories,
  ];
  const productForm = useForm<Omit<Products, "id">>({
    resolver: zodResolver(productsSchema),
    defaultValues: productData
      ? {
          ...productData,
          price: String(productData.price),
        }
      : {
          name: "",
          image_url: "",
          day_shift: DayShift.ALL,
        },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = productForm;

  return (
    <div style={{ width: "50rem" }}>
      <FormProvider {...productForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            id
              ? handleUpdateForm({ mutate, data, id })
              : handleCreateForm({ mutate, data })
          )}
        >
          <Form.Input name="name" type="text" placeholder={"Nome do produto"} />
          <Form.Error field="name" />

          <Form.Input
            name="price"
            type="text"
            placeholder={"Preço do produto"}
          />
          <Form.Error field="price" />

          <Form.Input
            name="description"
            type="text"
            placeholder={"Descrição do produto"}
          />
          <Form.Error field="description" />

          <Form.Input
            name="image_url"
            type="text"
            placeholder={"Url da imagem do produto"}
          />
          <Form.Error field="image_url" />

          <Form.Label text="Categoria do produto" />
          <Form.Select
            name="category_id"
            optionsList={defaultCategories.map((category) => ({
              value: category.id,
              text: category.name,
            }))}
          />
          <Form.Error field="category_id" />

          <Form.Label text="Turno do produto" />
          <Form.Select
            name="day_shift"
            optionsList={[
              { value: DayShift.ALL, text: "Todos" },
              { value: DayShift.DAY, text: "Dia" },
              { value: DayShift.NIGHT, text: "Noite" },
            ]}
          />
          <Form.Error field="day_shift" />

          <Form.Button disabled={isSubmitting} type="submit">
            {id ? "Atualizar produto" : "Criar produto"}
          </Form.Button>
        </Form.Root>
      </FormProvider>
    </div>
  );
}
