import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-testing',
  templateUrl: './browser-testing.component.html',
  styleUrls: ['./browser-testing.component.scss'],
})
export class BrowserTestingComponent implements OnInit {
  constructor() {}

  deviceType: string = 'desktop';
  googleBaseUrl: string = 'https://www.google.com/maps/search/?api=1&query=';
  appleBaseUrl: string = 'https://maps.apple.com/?q=';
  testLatLong: number[] = [52.52533, -109.866319];

  ngOnInit(): void {
    if (/android/i.test(window.navigator.userAgent)) {
      this.deviceType = 'android';
    }
    if (/iphone/i.test(window.navigator.userAgent)) {
      this.deviceType = 'iphone';
    }
  }

  get desktopLink(): string {
    return `${this.googleBaseUrl}${encodeURIComponent(
      this.testLatLong.join(',')
    )}`;
  }

  get androidLink(): string {
    return `${this.googleBaseUrl}${encodeURIComponent(
      this.testLatLong.join(',')
    )}`;
  }

  get iphoneLink(): string {
    return `${this.appleBaseUrl}${encodeURIComponent(
      this.testLatLong.join(',')
    )}`;
  }
}
