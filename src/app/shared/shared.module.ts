import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { OrderService } from './services/order.service';

@NgModule({
    // Declarando os componentes do módulo
    declarations: [HeaderComponent, FooterComponent, ContentLayoutComponent],

    // Importanto as dependências do módulo
    imports: [CommonModule, HttpClientModule, RouterModule],

    // componentes do módulo que poderão ser utilizados por outros módulos
    exports: [HeaderComponent, FooterComponent, ContentLayoutComponent],
    providers: [OrderService]
})
export class SharedModule { }