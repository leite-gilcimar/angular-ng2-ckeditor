import { ModalComponent } from "./modal/modal.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
declare var CKEDITOR: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("ckeditor") ckeditor: any;
  ckeditorContent: string = "<p>TESTE</p>";
  ckeConfig: any;
  ckIcon: any;
  file: File;
  listHmtl: string[] = [];
  isShow: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.ckeConfig = {
      uiColor: "#83a9ca",
      allowedContent: false,
      extraPlugins: "divarea",
      forcePasteAsPlainText: true,
    };
    this.ckIcon = `${document.location.protocol}//${window.location.host}/assets/folder.png`;
    CKEDITOR.on("instanceCreated", function (event, data) {
      var editor = event.editor,
        element = editor.element;
      editor.name = "content";
    });
  }

  openFileExplorer() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      let files: FileList = input.files;
      this.readFiles(files);
    };
    input.click();
  }

  private readFiles(files: FileList) {
    if (!!files && files[0].type.startsWith("image/")) {
      this.file = files[0];
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }

  private _handleReaderLoaded(readerEvt: any) {
    let binaryString = readerEvt.target.result;
    let base64textString = btoa(binaryString);

    let link = this.ckeditor.instance.document.createElement("img");
    link.setAttribute("alt", "Image");
    link.setAttribute(
      "src",
      `data:${this.file.type};base64, ${base64textString}`
    );
    this.ckeditor.instance.insertElement(link);
  }

  onDrop(event: any) {
    if (!!event.data && event.data.dataTransfer) {
      const files: FileList = event.data.dataTransfer.$.files;
      console.log("Drop");
      this.readFiles(files);
    }
  }

  onPaste(event: any) {
    const dataTransfer = event.clipboardData;
    if (!!dataTransfer && dataTransfer.files.length > 0) {
      const files: FileList = dataTransfer.files;
      console.log("Paste");
      this.readFiles(files);
    }
  }

  showResult() {
    this.listHmtl = [];
    this.listHmtl.push(CKEDITOR.instances.content.getData());
    this.isShow = true;
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "250px",
      data: { name: "TESTE1", animal: "TESTE" },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed");
      if (!!result) {
        console.log(result);
      }
    });
  }
}
