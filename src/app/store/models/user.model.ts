export interface User {
  id?: number
  password: string
  first_name: string
  middle_name?: string
  last_name: string
  email: string,
  auth_token?: string
}
