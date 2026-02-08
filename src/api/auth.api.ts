import api from "./axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/**
 * LOGIN (needs cookies)
 */
export const login = async (payload: LoginPayload) => {
  const res = await api.post("/auth/login", payload, {
    withCredentials: true, // ✅ ADD HERE
  });
  return res.data;
};

/**
 * REGISTER (needs cookies)
 */
export const register = async (payload: RegisterPayload) => {
  const res = await api.post("/auth/register", payload, {
    withCredentials: true, // ✅ ADD HERE
  });
  return res.data;
};

/**
 * GET AUTH USER (needs cookies)
 */
export const fetchMe = async () => {
  const res = await api.get("/auth/me", {
    withCredentials: true, // ✅ ADD HERE
  });
  return res.data.user;
};

/**
 * LOGOUT (needs cookies)
 */
export const logout = async () => {
  await api.post(
    "/auth/logout",
    {},
    {
      withCredentials: true, // ✅ ADD HERE
    }
  );
};
