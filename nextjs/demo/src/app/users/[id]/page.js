import { notFound } from 'next/navigation';

export default function ProductPage({ params }) {
  const { id } = params;

  if (!id) {
    return notFound(); // Show 404 if no id is provided
  }

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>This is the product page for ID {id}.</p>
    </div>
  );
}
