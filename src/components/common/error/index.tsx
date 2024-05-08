import React from "react";
import { Typograph } from "../typograph";
import { Button } from "../button";

export default function ErrorWrapper({ action }: { action: () => void }) {
  return (
    <main
      style={{
        width: "100%",
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typograph.Error>...Oops parece que ouve algum erro</Typograph.Error>
      <Button $color="#0b0b0b" onClick={() => action()}>
        Tentar novamente
      </Button>
    </main>
  );
}
