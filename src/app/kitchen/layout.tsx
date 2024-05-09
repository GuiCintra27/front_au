import { Header } from "@/components/common/header";

export default function KitchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
