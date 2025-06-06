import { Routes } from '@angular/router';
import { TemplaterefComponent } from './features/concepts/templateref/templateref.component';
import { ContentProjectionComponent } from './features/concepts/content-projection/content-projection.component';
import { RxjsOperatorsComponent } from './features/concepts/rxjs-operators/rxjs-operators.component';
import { ProductCatelogueComponent } from './features/product-catelogue/product-catelogue.component';

export const routes: Routes = [
    {
        path:'view-child',
        component: TemplaterefComponent
    } ,
    {
        path: 'content-projection',
        component: ContentProjectionComponent
    },
    {
        path: 'rxjs-operators',
        component: RxjsOperatorsComponent
    },
    {
        path: 'product-catelogue',
        component: ProductCatelogueComponent
    }
];
