import {type PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {type ProductInfo} from '../../types/product-info';
import ProductJSON from '../../json/product-list.json';

const initialState: ProductInfo = {
	id: '',
	title: '',
	image: '',
	subtitle: '',
	brand: '',
	reviews: [],
	retailer: '',
	details: [],
	tags: [],
	sales: [],
};

export const getProductData = createAsyncThunk(
	'product/productData',
	async (_, {rejectWithValue}) => {
		try {
			const data = ProductJSON[0];
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductDetails(state, action: PayloadAction<ProductInfo>) {
			const details = action.payload;
			return {...state, ...details};
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProductData.pending, state => {})
			.addCase(getProductData.fulfilled, (state, action) => ({...state, ...action.payload, loading: false}))
			.addCase(getProductData.rejected, state => {});
	},
});

export const {setProductDetails} = productSlice.actions;

export default productSlice.reducer;
