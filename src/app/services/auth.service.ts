import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Credential} from "../store/models/credential.model";
import {User} from "../store/models/user.model";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signup(user: User) {
    return this.httpClient.post<User>('/api/users', user)
  }

  login(credentials: Credential) {
    return this.httpClient.post<User>('/api/users/login', {
      email: credentials.username,
      password: credentials.password
    })
  }

}
