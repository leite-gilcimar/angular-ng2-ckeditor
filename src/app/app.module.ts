import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CKEditorModule } from "ng2-ckeditor";

import { RenderHtmlExternoModule } from "./../shared/render-html-externo/render-html-externo.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    RenderHtmlExternoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
