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
export const postHireTalentRequest=(hireTalentData)=>{
   return apiService.post(`/hire`,hireTalentData)
}

export const postCertificate = (data) => {
   return apiService.post(`/user/login`, data);
}