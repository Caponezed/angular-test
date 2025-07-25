import { AfterViewInit, Component, ElementRef, TemplateRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FormsModule],
  template: `
  <div class="d-flex flex-column gap-2 p-3">
    <div #template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam ab ipsam? Blanditiis deserunt quas odit est, voluptas accusamus totam sit id. Atque assumenda hic earum perferendis consectetur nostrum sapiente!</p>
    </div>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  template = viewChild('template', { read: ElementRef });

  ngAfterViewInit(): void {
    console.log(this.template());
  }
}
