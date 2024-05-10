"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/common/form";
import { errorToast, successToast } from "@/components/UI/alerts";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostCategory } from "@/hooks/api/categories";
import { Categories, DayShift } from "@/models/menuModel";
import { categoriesSchema } from "@/validations/createAndUpdateCategory";

export default function CategoryForm() {
  const { mutate, error } = usePostCategory();

  const categoryForm = useForm<Omit<Categories, "id">>({
    resolver: zodResolver(categoriesSchema),
    defaultValues: {
      name: "",
      image_url: "",
      day_shift: DayShift.ALL,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = categoryForm;

  function handleForm({ data }: { data: Omit<Categories, "id"> }) {
    try {
      mutate(data);
      successToast("Categória criada com sucesso");
    } catch (error) {}
  }

  useEffect(() => {
    // @ts-expect-error
    const status = error?.cause?.status;
    if (status) {
      if (status === 409) errorToast("Ja existe uma categoria com esse nome");
      else if (status === 422) errorToast("Dados inválidos");
      else errorToast("Ocorreu um erro no servidor");
    }
  }, [error]);

  return (
    <div style={{ width: "50rem" }}>
      <FormProvider {...categoryForm}>
        <Form.Root onSubmit={handleSubmit((data) => handleForm({ data }))}>
          <Form.Input
            name="name"
            type="text"
            placeholder={"Nome da categoria"}
          />
          <Form.Error field="name" />

          <Form.Input
            name="image_url"
            type="text"
            placeholder={"Url da image da categoria"}
          />
          <Form.Error field="image_url" />

          <Form.Label text="Turno da categoria" />
          <Form.Select
            name="day_shift"
            defaultOption="Todos"
            optionsList={[
              { value: DayShift.ALL, text: "Todos" },
              { value: DayShift.DAY, text: "Dia" },
              { value: DayShift.NIGHT, text: "Noite" },
            ]}
          />
          <Form.Error field="day_shift" />

          <Form.Button disabled={isSubmitting} type="submit">
            Criar categoria
          </Form.Button>
        </Form.Root>
      </FormProvider>
    </div>
  );
}
