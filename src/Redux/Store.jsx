import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Authslice";
import { CrudSlice } from "./Crudslice";

export const store = configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        Crud: CrudSlice.reducer,
    }
})