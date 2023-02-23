import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "render-html-externo",
  templateUrl: "./render-html-externo.component.html",
  styleUrls: ["./render-html-externo.component.css"],
})
export class RenderHtmlExternoComponent implements AfterViewInit {
  @Input() item: string = "";

  @ViewChild("divExterno") divExterno: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.addElement(this.item);
  }

  private addElement(value: string) {
    const p: HTMLParagraphElement = this.renderer.createElement("p");
    p.innerHTML = value;
    this.renderer.appendChild(this.divExterno.nativeElement, p);
  }
}
