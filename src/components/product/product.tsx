import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {type AppDispatch} from '../../store';
import ProductDetails from '../product-detail/product-details';
import ProductSales from '../product-sales/product-sales';
import ProductTable from '../product-table/product-table';
import {getProductData} from './product-reducer';

export const Product: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getProductData());
	}, [dispatch]);

	return (
		<div className='product-container'>
			<ProductDetails />
			<div className='right-container'>
				<ProductSales />
				<ProductTable />
			</div>
		</div>
	);
};
