import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6414c9ade8fe5a3f3a0f92fb.mockapi.io' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContact: builder.query({
            query: () => '/contact',
            providesTags: ['Contact']
        }),
        addContact: builder.mutation({
            query: (value) => ({
                url: '/contact',
                method: 'POST',
                body: value,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contact/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const { useGetContactQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;