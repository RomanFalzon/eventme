import { create } from 'zustand';

const useSiteStore = create((set, get) => ({
    config: null, // Config Object
    setConfig: (config) => set({ config }), // Method to update the site config

    // Getters
    getCountryCode: () => get().config.countryCode ?? null,
}));

export default useSiteStore;
