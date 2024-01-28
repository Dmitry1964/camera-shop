import { ProductTypes} from 'src/app/types/productType';
import ProductCard from 'src/features/product-card/product-card';
import { useAppSelector } from 'src/shared/hooks/hooks';


const  CamerasList = (): JSX.Element => {
  const cameras = useAppSelector((state) => state.productList.products);
  return (
    <div className="cards catalog__cards">
      {cameras && cameras.map((item) => (
        <ProductCard key={item.id} data = {item} />
      ))}
    </div>
  );
};

export default CamerasList;
