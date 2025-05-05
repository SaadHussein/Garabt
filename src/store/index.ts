import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreState = {
  countryCode: string;
  language: string;
  openMobileNavigation: boolean;
  setOpenMobileNavigation: (open: boolean) => void;
  setCountryCode: (code: string) => void;
  setLanguage: (language: string) => void;
};

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      countryCode: "",
      language: "en",
      openMobileNavigation: false,

      setOpenMobileNavigation: (open) => set({ openMobileNavigation: open }),
      setCountryCode: (code) => set({ countryCode: code }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "garabt-storage",
      partialize: (state) => ({
        countryCode: state.countryCode,
        language: state.language,
        openMobileNavigation: state.openMobileNavigation,
      }),
    }
  )
);

export default useStore;
