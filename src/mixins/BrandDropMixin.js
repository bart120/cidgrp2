import BrandsService from '../services/BrandsService';
import Dropdown from 'primevue/dropdown';

const servBrand = new BrandsService();

export const brandDropMixin = {
    components: {
        Dropdown
    },
    data() {
        return { brands: [] };
    },
    async beforeMount() {
        this.brands = await servBrand.getBrands();
    }
}