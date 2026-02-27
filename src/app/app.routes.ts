import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Careers } from './pages/careers/careers';
import { KnowledgeServices } from './pages/knowledge-services/knowledge-services';
import { Product } from './pages/product/product';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'careers', component: Careers },
    { path: 'product', component: Product },
    { path: 'knowledge-services', component: KnowledgeServices }
];
