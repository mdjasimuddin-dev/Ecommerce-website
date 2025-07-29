import { create } from 'zustand'
import { axiosPublic } from '../Hooks/useAxiosPublic'

const featureStore = create((set) => ({
    featureList: null,
    featureAPIRequest: async () => {
        const res = await axiosPublic.get('/featuresList')
        if (res?.data?.status === 'success') {
            set({ featureList: res?.data?.data })
        }
    }
}))


export default featureStore