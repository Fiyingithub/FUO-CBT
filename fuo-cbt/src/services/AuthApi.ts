import type { AdminLoginData, AdminLoginResponse, AdminSignupData, AdminSignupResponse, LecturerLoginData, LecturerLoginResponse, StudentLoginData, StudentLoginResponse } from "../types/Auth";
import api from "../utils/api";


export const AdminSignup = async ( AdminSignupPayload: AdminSignupData): Promise<AdminSignupResponse>=> {
    try {
        const res = await api.post('/auth/admin/signup', AdminSignupPayload)
        return res.data
    } catch (error: any) {
        if (error.response) {
      throw error.response.data;
    }
    throw new Error('Something went wrong during Leccturer login.');
    
    }
}

export const AdminLogin = async (AdminLoginPayload: AdminLoginData): Promise<AdminLoginResponse> => {
  try {
    const res = await api.post('/auth/admin/login', AdminLoginPayload);
    return res.data;
  } catch (error: any) {
    // Optionally throw or return a structured error
    if (error.response) {
      throw error.response.data;
    }
    throw new Error('Something went wrong during admin login.');
  }
};


export const LecturerLogin = async (LecturerLoginPayload: LecturerLoginData): Promise<LecturerLoginResponse> =>{

    try {
        const res = await api.post('/auth/lecturer/login', LecturerLoginPayload)
        return res.data
    } catch (error: any) {
        if (error.response) {
      throw error.response.data;
    }
    throw new Error('Something went wrong during Leccturer login.');
    }
}

export const StudentLogin = async (StudentLoginPayload: StudentLoginData): Promise<StudentLoginResponse> =>{

    try {
        const res = await api.post('/auth/lecturer/login', StudentLoginPayload)
        return res.data
    } catch (error: any) {
        if (error.response) {
      throw error.response.data;
    }
    throw new Error('Something went wrong during Leccturer login.');

    }
}