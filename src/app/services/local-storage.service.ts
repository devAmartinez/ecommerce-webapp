import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }

    setItem(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    getItem(key) {
      localStorage.getItem(key);
    }

    clearItem(key) {
      localStorage.removeItem(key);
    }
}
