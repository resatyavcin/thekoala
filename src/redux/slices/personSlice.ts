import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";

interface Person {
  id: number;
  name: string;
  age: number;
}

interface PersonState {
  persons: Person[];
  loading: boolean;
  error: string | null;
}

// API'den verileri çekmek için Thunk oluşturuyoruz
export const fetchPersons = createAsyncThunk(
  "person/fetchPersons",
  async () => {
    const { data, error } = await supabase.from("person").select("*");

    if (error) throw new Error(error.message);
    return data as Person[];
  }
);

const initialState: PersonState = {
  persons: [],
  loading: false,
  error: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.loading = false;
        state.persons = action.payload;
      })
      .addCase(fetchPersons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch persons";
      });
  },
});

export default personSlice.reducer;
