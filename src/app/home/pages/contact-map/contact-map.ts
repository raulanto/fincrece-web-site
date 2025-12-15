import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-map.html',
})
export class ContactMap {
  mapLink = "https://www.google.com/maps/place/Fincrece/@17.9765285,-92.9468413,18.14z/data=!4m6!3m5!1s0x85edd779a5ab031f:0x49cc35efc7e2f845!8m2!3d17.9765745!4d-92.9467989!16s%2Fg%2F1vk6zl6y!5m1!1e2?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
}
