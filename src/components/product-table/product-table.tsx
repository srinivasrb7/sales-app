import DataTable from 'react-data-table-component';
import {useAppSelector} from '../../hooks';
import {type SalesData} from '../../types/product-info';

const ProductTable: React.FC = () => {
	const sales = useAppSelector(state => state.sales);

	const columns = [
		{
			name: 'Week Ending',
			selector: (row: SalesData) => row.weekEnding,
			sortable: true,
		},
		{
			name: 'Retail Sales',
			selector: (row: SalesData) => Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}).format(row.retailSales),
			sortable: true,
		},
		{
			name: 'Wholesale Sales',
			selector: (row: SalesData) => Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}).format(row.wholesaleSales),
			sortable: true,
		},
		{
			name: 'Units Sold',
			selector: (row: SalesData) => row.unitsSold,
			sortable: true,
		},
		{
			name: 'Retailer Margin',
			selector: (row: SalesData) => Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}).format(row.retailerMargin),
			sortable: true,
		},
	];

	return (
		<div>
			<DataTable columns={columns} data = {sales} pagination={true} />
		</div>
	);
};

export default ProductTable;
