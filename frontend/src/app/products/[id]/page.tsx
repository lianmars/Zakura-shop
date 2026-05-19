import { PRODUCTS } from "@/lib/mockData";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient id={params.id} />;
}
