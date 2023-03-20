import { apiSlice } from '../../../../../app/api/apiSlice'
import { setCourseDetails, setCourses } from './coursesSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (credentials) => ({
        url: '/course',
        method: 'POST',
        Headers: { 'Content-type': 'multipart/form-data' },
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      },
    }),
    // updateCourse: builder.mutation({
    //   query: (credentials) => ({
    //     url: `/course${}`,
    //     method: 'PATCH',
    //     Headers: { 'Content-type': 'multipart/form-data' },
    //     body: { ...credentials },
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled
    //       console.log(data)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   },
    // }),
    getTutors: builder.mutation({
      query: () => ({
        url: '/course/tutors',
        method: 'GET',
      }),
    }),
    viewAllCourses: builder.mutation({
      query: () => ({
        url: '/course',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCourses({
              courses: data.data.courses,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    viewCoursesDetails: builder.mutation({
      query: (courseID) => ({
        url: `/course/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCourseDetails({
              courseDetails: data.data.course,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    deleteCourse: builder.mutation({
      query: (courseID) => ({
        url: `/course/${courseID}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useCreateCourseMutation,
  useGetTutorsMutation,
  useViewAllCoursesMutation,
  useViewCoursesDetailsMutation,
  useDeleteCourseMutation,
} = coursesApiSlice
