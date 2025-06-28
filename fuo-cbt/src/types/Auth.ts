// Admin signup
export interface AdminSignupData {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phoneNumber: string;
  password: string;
}

export interface AdminUser {
  firstname?: string;
  lastname?: string;
  email?: string;
  gender?: string;
  phoneNumber?: string;
  role?: string;
}

export interface AdminSignupResponse {
  status: number;
  message: string;
  error: boolean;
  user: AdminUser;
}

// Admin Login
export interface AdminLoginData {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  status: number;
  message: string;
  error: boolean;
  token: string;
  user: AdminUser;
}


// Lecturer Login
export interface LecturerLoginData {
  staffId: string;
  password: string;
}

export interface LecturerLoginResponse {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phoneNumber: string;
  role: string;
  staffId: string;
  department: string;
  faculty: string;
}

// Student Login
export interface StudentLoginData {
  matricNumber: string;
  password: string;
}

export interface StudentLoginResponse {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phoneNumber: string;
  role: string;
  matricNumber: string;
  department: string;
  faculty: string;
}
