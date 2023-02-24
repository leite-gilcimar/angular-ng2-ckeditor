import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CKEditorModule } from "ng2-ckeditor";

import { MaterialModule } from "./../shared/material/material.module";
import { RenderHtmlExternoModule } from "./../shared/render-html-externo/render-html-externo.module";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    MaterialModule,
    RenderHtmlExternoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
