import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRountingModule } from './app-rounting.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { PipesModule } from './pipes/pipes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ComponentsModule,
    PagesModule,
    PipesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
