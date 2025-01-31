import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OPTIMAI_BASE_URL = 'https://api.altan.ai';

const optimai_shop = axios.create({
    name: "optimai_shop",
    baseURL: `${OPTIMAI_BASE_URL}/shop`
});


const initialState = {
    order: null,
    clientSecret: null,
    checkoutSession: null,
    loading: false,
    error: null,
};

export const fetchOrderDetails = createAsyncThunk(
    'money/fetchOrderDetails',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await optimai_shop.get(`/order/${orderId}`);
            return response.data.order;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const setUpPayment = createAsyncThunk(
    'money/setUpPayment',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await optimai_shop.post(`/payment/setup?order_id=${orderId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createPaymentIntent = createAsyncThunk(
    'money/createPaymentIntent',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await optimai_shop.post(`/payment/intent?order_id=${orderId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const moneySlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        clearState: (state) => {
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload;
            })
            .addCase(fetchOrderDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch order details';
            })
            .addCase(createPaymentIntent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPaymentIntent.fulfilled, (state, action) => {
                state.loading = false;
                state.clientSecret = action.payload.clientSecret;
            })
            .addCase(createPaymentIntent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to create payment intent';
            })
            .addCase(setUpPayment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(setUpPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.clientSecret = action.payload.clientSecret;
            })
            .addCase(setUpPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to set up payment';
            });
    },
});

export const { clearState: clearMoneyState } = moneySlice.actions;

export default moneySlice.reducer;

export const createClient = async (accountId) => {
    try {
        console.log('Creating client for account:', accountId);
        const params = new URLSearchParams({ account_id: accountId });
        const response = await optimai_shop.post(`/client/?${params}`, {
            "nickname": "Unknown Client",
            "origin": window.location.origin
        });
        return response.data.client;
    } catch (error) {
        console.error('Failed to create client:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await optimai_shop.post('/order/', orderData);
        return response.data.order;
    } catch (error) {
        console.error('Failed to create order:', error);
        throw error;
    }
};


export const prepareOrderData = (selectedPlans, currency, yearly) => {
    console.log("selectedPlans", selectedPlans);

    const items = Object.values(selectedPlans).map(plan => ({
        name: plan.name,
        subscription_plan_billing_id: yearly
            ? plan.billing_options.items.find(b => b.billing_frequency === 'yearly').id
            : plan.billing_options.items.find(b => b.billing_frequency === 'monthly').id,
        quantity: 1,
        price: yearly
            ? plan.billing_options.items.find(b => b.billing_frequency === 'yearly').price
            : plan.billing_options.items.find(b => b.billing_frequency === 'monthly').price,
    }));

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    // Retrieve account_id from the first selected plan
    const firstPlan = Object.values(selectedPlans)[0];

    return {
        account_id: firstPlan.account_id,
        currency: currency,
        items: items,
        total_price: totalPrice,
    };
};