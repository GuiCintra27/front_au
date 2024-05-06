async function Categories({
  searchParams,
}: {
  searchParams: { categoryId: string };
}) {
  return <div>{searchParams.categoryId}</div>;
}

export default Categories;
