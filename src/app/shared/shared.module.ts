import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';

@NgModule({
    // Declarando os componentes do módulo
    declarations: [HeaderComponent, FooterComponent, ContentLayoutComponent],

    // Importanto as dependências do módulo
    imports: [RouterModule],

    // componentes do módulo que poderão ser utilizados por outros módulos
    exports: [HeaderComponent, FooterComponent, ContentLayoutComponent],
    providers: []
})
export class SharedModule { }