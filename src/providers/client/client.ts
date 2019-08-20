import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../models/client.model';

@Injectable()
export class ClientProvider {
  private URL_API = 'https://testbankapi.firebaseio.com';
  constructor(public http: HttpClient) {
  }

  /**
   * Servicio que obtienes los clientes
   */
  public getClients() {
    return this.http.get(`${this.URL_API}/clients.json`);
  }

  /**
   * Servicio que guarda un cliente
   * @param client 
   */
  public saveClient(client: Client) {
    return this.http.post(`${this.URL_API}/clients.json`, client);
  }


}
