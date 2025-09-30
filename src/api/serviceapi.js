import apiService from "./apiService";

export const postEnrollmentRequest = (enrollmentData) => {
   return apiService.post(`/enroll/send`, enrollmentData);
};

export const postContactRequest = (contactData) => {
   return apiService.post(`/contact`, contactData);
};

export const postFooterRequest = (feedbackData) => {
   return apiService.post(`/footer`, {'email':feedbackData});
};