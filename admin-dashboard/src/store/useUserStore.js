import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        firstName: null,
        lastName: null,
        email: null,
        jobOrOrganization: null,
        role: null,
      },
      isAuthenticated: false,

      setUser: (userData) => set((state) => ({ 
        user: { ...state.user, ...userData },
        isAuthenticated: true 
      })),
      
      updateUser: (userData) => set((state) => ({ 
        user: { ...state.user, ...userData } 
      })),
      
      clearUser: () => set({ 
        user: {
          firstName: "",
          lastName: "",
          email: "",
          jobOrOrganization: "",
          role: "",
          _id: null,
        },
        isAuthenticated: false 
      }),

      getFullName: () => {
        const state = useUserStore.getState();
        return `${state.user.firstName} ${state.user.lastName}`;
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;
