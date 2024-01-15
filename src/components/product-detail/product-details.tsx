import {useAppSelector} from '../../hooks';
import './product-detail.css';

const ProductDetails: React.FC = () => {
	const product = useAppSelector(state => state);

	return (
		<div className='product-details'>
			<div>
				<img src= {product.image} alt ={product.title}/>
				<h2 className='product-title'>{product.title}</h2>
				<p className='product-subtitle'>{product.subtitle}</p>
			</div>
			<div className='product-tags'>
				{product.tags.map(tag => (
					<span key={tag} className='tags'>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProductDetails;
