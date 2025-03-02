"use client";

import React, { Suspense } from 'react';
import ProductDetail from '../components/ProductDetail';
import { useSearchParams } from 'next/navigation';

const ProductPageContent = () => {
  const searchParams = useSearchParams();
  
  // Vous pouvez utiliser searchParams ici si nécessaire
  console.log('Product page search params:', searchParams.toString());

  return <ProductDetail />;
};

const page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading product details...</div>}>
      <ProductPageContent />
    </Suspense>
  );
};

export default page;