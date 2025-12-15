import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-funding-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funding-section.html',
})
export class FundingSection {

  funders = [
    { name: 'BBVA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/2560px-BBVA_2019.svg.png' },
    { name: 'Santander', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png' },
    { name: 'Banorte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Banorte_logo.svg/2560px-Banorte_logo.svg.png' },
    { name: 'HSBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/HSBC_logo_%282018%29.svg/2560px-HSBC_logo_%282018%29.svg.png' },
    { name: 'Scotiabank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Scotiabank_logo.svg/2560px-Scotiabank_logo.svg.png' },
    { name: 'Nafin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Nacional_Financiera_logo.svg/1200px-Nacional_Financiera_logo.svg.png' },
    { name: 'FIRA', logo: 'https://www.gob.mx/cms/uploads/article/main_image/83377/logo-fira-agricultura.jpg' }, // Placeholder genérico
    { name: 'Bancomext', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Bancomext_logo.svg' }
  ];

}
