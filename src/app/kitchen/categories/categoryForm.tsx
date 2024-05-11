"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/common/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories, DayShift } from "@/models/menuModel";
import { categoriesSchema } from "@/validations/createAndUpdateCategory";
import {
  handleCreateForm,
  handleUpdateForm,
} from "@/components/infra/fetch-logic/categories";

export function CategoryForm({
  mutate,
  id,
  categoryData,
}: {
  mutate: any;
  id?: string;
  categoryData?: Omit<Categories, "id">;
}) {
  const categoryForm = useForm<Omit<Categories, "id">>({
    resolver: zodResolver(categoriesSchema),
    defaultValues: categoryData
      ? categoryData
      : {
          name: "",
          image_url: "",
          day_shift: DayShift.ALL,
        },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = categoryForm;

  return (
    <div style={{ width: "50rem" }}>
      <FormProvider {...categoryForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            id
              ? handleUpdateForm({ mutate, data, id })
              : handleCreateForm({ mutate, data })
          )}
        >
          <Form.Input
            name="name"
            type="text"
            placeholder={"Nome da categoria"}
          />
          <Form.Error field="name" />

          <Form.Input
            name="image_url"
            type="text"
            placeholder={"Url da imagem da categoria"}
          />
          <Form.Error field="image_url" />

          <Form.Label text="Turno da categoria" />
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
            {id ? "Atualizar categoria" : "Criar categoria"}
          </Form.Button>
        </Form.Root>
      </FormProvider>
    </div>
  );
}
