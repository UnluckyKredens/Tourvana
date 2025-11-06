import { environment } from './../../../environments/environment.development';

export const apiEndpoint = {

  auth: {
    login: `${environment.apiUrl}/auth/login`,
    register: `${environment.apiUrl}/auth/register`
  },
  user: {
    upcommingtrips: `${environment.apiUrl}/user/upcommingtrips`
  },
  trip: {
    getTripById: `${environment.apiUrl}/trip/id/`
  }
}
