import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for forms
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes = [
  { path: '', component: LoginComponent },  // Initial route showing the login component
  { path: 'home', component: HomeComponent }  // Home route for after successful login
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ReactiveFormsModule, // Provide ReactiveFormsModule globally
  ],
};
