import { ProductTypes } from 'src/app/types/productType';
import ProductCard from 'src/features/product-card/product-card';

type CamerasListProp = {
  camerasList: ProductTypes[];
}

const CamerasList = ({ camerasList }: CamerasListProp): JSX.Element => (
  <div className="cards catalog__cards">
    {camerasList && camerasList.map((item) => (
      <ProductCard key={item.id} data={item} />
    ))}
  </div>
);

export default CamerasList;
