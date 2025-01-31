"use client";
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Search from './Search';
import ProductPreview from './ProductPreview';
import { debounce } from 'lodash';
import { Container, Stack } from '@mui/material';
import categories from './categories';
import FilterSection from './FilterSection';
import { useTranslation } from 'react-i18next';
import Particles from '../Landing/components/particles';
import Skeleton from '@mui/material/Skeleton';

interface Product {
  name: string;
  description?: string;
  is_verified: boolean;
  public_details?: {
    demo?: string;
  };
  tags?: string[];
}

export default function Integrations({ isAppMode = false }) {
  const { t } = useTranslation(["common", "home"]);
  const [products, setProducts] = useState<Product[]>([]);
  const [type, setType] = useState(isAppMode ? 'app' : 'flow');
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [hasFreeDemo, setHasFreeDemo] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = event.target.name;
    setSelectedCategories((prev) =>
      event.target.checked ? [...prev, categoryId] : prev.filter((id) => id !== categoryId)
    );
  };

  const handleVerifiedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerified(event.target.checked);
  };

  const handleFreeDemoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasFreeDemo(event.target.checked);
  };

  const handleSearchChange = debounce((newQuery: string) => {
    setQuery(newQuery);
  }, 500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url =
          query.trim() === ''
            ? `https://api.altan.ai/platform/marketplace/${type}`
            : `https://api.altan.ai/platform/marketplace/${type}?q=${query}&relationships=true`;
        const result = await axios(url);
        setProducts(result.data.products);
      } catch (error) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type, query]);

  const filtered = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(query.toLowerCase()));

      const matchesVerified = isVerified ? product.is_verified : true;
      const matchesFreeDemo = hasFreeDemo ? !!product.public_details?.demo : true;

      const matchesCategories = selectedCategories.length
        ? selectedCategories.some((category) => product?.tags?.includes(category))
        : true;

      return matchesQuery && matchesVerified && matchesFreeDemo && matchesCategories;
    });

    if (type === 'flow') {
      return filteredProducts.sort((a, b) => Number(b.is_verified) - Number(a.is_verified));
    }

    return filteredProducts;
  }, [products, query, isVerified, hasFreeDemo, selectedCategories, type]);

  return (
    <section id="marketplace-search" className="mb-10 py-20 lg:py-25 xl:py-30">
      <Container className="mt-12">
        <Particles className="absolute inset-10 h-250 -z-99" quantity={10} />

        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-center" data-aos="fade-down">
          {isAppMode ? t("common:apps") : 'altan marketplace™'}
        </h1>
        <Search setQuery={handleSearchChange} setType={setType} isAppMode={isAppMode} />
        <Stack direction="row" className="mt-14" spacing={4}>
          {!isAppMode &&
            <FilterSection
              categories={categories}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              isVerified={isVerified}
              handleVerifiedChange={handleVerifiedChange}
              hasFreeDemo={hasFreeDemo}
              handleFreeDemoChange={handleFreeDemoChange}
            />}
          {loading && products.length === 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {Array.from(new Array(24)).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={300}
                  height={210}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    margin: 1,
                    padding: 2
                  }}
                />
              ))}
            </div>
          ) : (
            filtered && <ProductPreview type={type} products={filtered} />
          )}
        </Stack>
      </Container>
    </section>
  );
}
