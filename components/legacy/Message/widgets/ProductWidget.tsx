// import { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';
// import useTheme from '@mui/material/styles/useTheme';
// import axios from "axios";

// // Define a type for the product
// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   sale_price: number;
//   additional_image_urls?: string[];
// };

// // Define prop types for ProductDetail component
// type ProductDetailProps = {
//   product: Product;
//   disabled: boolean;
// };

// export const ProductDetail = ({ product, disabled }: ProductDetailProps) => {
//   const theme = useTheme();

//   const handleClick = () => {
//     if (!disabled) {
//       window.open(`https://app.altan.ai/product/${product.id}`, '_blank');
//     }
//   };
//   const contrastColor = theme.palette.mode === 'dark' ? '#000' : '#FFF';

//   return (
//     <div
//       className="product"
//       onClick={handleClick}
//       style={{
//         backgroundColor: contrastColor,
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <img
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             objectPosition: 'center center',
//           }}
//           src={
//             product?.additional_image_urls?.[0] ??
//             'https://avatars.mds.yandex.net/i?id=a247d9ac688703d17ebac72e288503c152a34191-11404303-images-thumbs&n=13'
//           }
//           alt="Product Image"
//         />
//       </div>

//       <div
//         className="bg-blur dark:bg-blur"
//         style={{
//           position: 'absolute',
//           bottom: theme.spacing(2),
//           left: theme.spacing(2),
//           textAlign: 'left',
//           border: '1px solid #262626',
//           borderRadius: '20px',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '4px',
//           zIndex: 2,
//         }}
//       >
//         <Typography
//           variant="subtitle2"
//           color="white"
//           style={{ marginLeft: 8, marginRight: 8 }}
//         >
//           {product?.name}
//         </Typography>
//         <Chip
//           label={`${product?.price / 100} EUR`}
//           sx={{ background: "#2563eb", color: 'white' }}
//         />
//       </div>
//     </div>
//   );
// };

// // Define prop types for TemplateLicense component
// type TemplateLicenseProps = {
//   product: Product;
//   disabled: boolean;
// };

// const TemplateLicense = ({ product, disabled }: TemplateLicenseProps) => {
//   const regularPrice = product.price / 100; // Convert cents to dollars
//   const salePrice = product.sale_price / 100; // Convert cents to dollars
//   const isOnSale = salePrice < regularPrice;
//   const discountPercentage = isOnSale
//     ? ((regularPrice - salePrice) / regularPrice) * 100
//     : 0;

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(price);
//   };

//   return (
//     <Box>
//       <Box>
//         <Typography
//           variant="h3"
//           component="span"
//           fontWeight="bold"
//           color="white"
//           sx={{ mr: 2 }}
//         >
//           {formatPrice(salePrice)}
//         </Typography>
//         {isOnSale && (
//           <>
//             <Typography
//               variant="h6"
//               component="span"
//               sx={{ textDecoration: 'line-through', color: 'red', mr: 2 }}
//             >
//               {formatPrice(regularPrice)}
//             </Typography>
//             <Chip
//               label={`${discountPercentage.toFixed(0)}% off`}
//               sx={{ background: 'green', color: 'white' }}
//             />
//           </>
//         )}
//       </Box>
//     </Box>
//   );
// };

// // Update the fetchProduct function to use the Product type
// export const fetchProduct = async (productId: string): Promise<Product> => {
//   try {
//     const response = await axios.get(
//       `https://api.altan.ai/shop/product/${productId}`
//     );
//     const { product } = response.data;
//     return product as Product; // Type assertion
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// // Define prop types for ProductWidget component
// type ProductWidgetProps = {
//   id: string;
//   disabled?: boolean;
//   isTemplate?: boolean;
// };

// export default function ProductWidget({
//   id,
//   disabled = false,
//   isTemplate = false,
// }: ProductWidgetProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [productFetched, setProductFetched] = useState<boolean>(false);

//   useEffect(() => {
//     fetchProduct(id)
//       .then((product: Product) => {
//         setProduct(product);
//         setProductFetched(true);
//       })
//       .catch((error: Error) => {
//         console.error("Failed to fetch product", error);
//         setProductFetched(true);
//       });
//   }, [id]);

//   let content: React.ReactNode;

//   if (product) {
//     content = (
//       <div style={{ margin: 0.5, maxWidth: 250 }}>
//         {isTemplate ? (
//           <ProductDetail product={product} disabled={disabled} />
//         ) : (
//           <TemplateLicense product={product} disabled={disabled} />
//         )}
//       </div>
//     );
//   } else if (productFetched) {
//     content = <div style={{ color: 'red' }}>404 Product not found</div>;
//   } else {
//     content = <Skeleton sx={{ width: '100%', height: 300 }} />;
//   }

//   return (
//     <Box
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%',
//       }}
//     >
//       {content}
//     </Box>
//   );
// }


export default function ProductWidget({id}) {
  return (
    <></>
  );
}