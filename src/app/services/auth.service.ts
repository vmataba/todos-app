import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Credential} from "../store/models/credential.model";
import {User} from "../store/models/user.model";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(credentials: Credential) {
    return this.httpClient.post<User>('/api/users/login', credentials)
  }

}
