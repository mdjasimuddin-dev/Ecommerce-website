
import { create } from 'zustand'
import { axiosPublic } from '../Hooks/useAxiosPublic'

const productStore = create((set) => ({
    brandList: null,
    brandRequestApi: async () => {
        const res = await axiosPublic.get('/productBrands')
        if (res.data.status === 'success') {
            set({ brandList: res.data.data })
        }
    },

    categoryList: null,
    categoryRequestApi: async () => {
        const res = await axiosPublic.get('/productCategories')
        if (res.data.status === 'success') {
            set({ categoryList: res.data.data })
        }
    },

    sliderList: null,
    sliderRequestApi: async () => {
        const res = await axiosPublic.get('/productSliders')
        if (res.data.status === 'success') {
            set({ sliderList: res.data.data })
        }
    },

    productRemark: null,
    productByRemarkRequest: async (remark) => {
        const res = await axiosPublic.get(`/productByRemark/${remark}`)
        if (res.data.status === 'success') {
            set({ productRemark: res.data.data })
        }
    }
}))

export default productStore