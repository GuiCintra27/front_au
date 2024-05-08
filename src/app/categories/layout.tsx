import { Header } from "@/components/common/header";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main style={{ width: "75%", margin: "6rem auto" }}>{children}</main>
    </>
  );
}
