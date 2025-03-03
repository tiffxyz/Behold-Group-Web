

// export interface UserType {
//     id: number;
//     username: string;
//     email: string;
//     firstName?: string;
//     lastName?: string;
//     companyName?: string;
//     bio?: string;
//     profile_image_url?: string;
//   }

//   export interface SignupFormData {
//     username: string;
//     email: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     companyName?: string;
//   }

//   export interface LoginFormData {
//     email: string;
//     password: string;
//   }

//   export interface ProfileUpdateData {
//     username?: string;
//     firstName?: string;
//     lastName?: string;
//     companyName?: string;
//     bio?: string;
//     profileImage?: File;
//   }


export interface UserType {
  id?: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  profileImageUrl?: string;
  // Add any other user properties you need
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName?: string;
}

export interface ProfileUpdateData {
  username?: string;
  bio?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  profileImage?: File;
}
