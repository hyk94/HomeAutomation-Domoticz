import { Injectable } from '@angular/core';

export class Settings {
  public login: string;
  public password: string;

  public openWeatherMapApiKey: string;
}

@Injectable()
export class SettingsService {

  private settings: Settings;
  private domoticzLoginName = "domoticzLogin";
  private domoticzPassName = "domoticzPass";
  private openWeatherMapApiKey = "openWeatherMapApiKey";

  constructor() { 
  }

  public loadSettings(): Settings {

    this.settings = new Settings();
    this.settings.login = localStorage.getItem(this.domoticzLoginName);
    this.settings.password = localStorage.getItem(this.domoticzPassName);
    this.settings.openWeatherMapApiKey = localStorage.getItem(this.openWeatherMapApiKey);

    return this.settings;
  }

  public get() {
    if (this.settings == null) {
      this.loadSettings();
    }

    return Object.assign({}, this.settings);
  }

  public save(settings: Settings) {

      this.settings = Object.assign({}, settings);

      localStorage.setItem(this.domoticzLoginName, this.settings.login);
      localStorage.setItem(this.domoticzPassName, this.settings.password);
      localStorage.setItem(this.openWeatherMapApiKey, this.settings.openWeatherMapApiKey);
  }
}
