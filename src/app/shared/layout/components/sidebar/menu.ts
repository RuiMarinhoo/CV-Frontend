import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'ri-dashboard-line',
    link: '/dashboard',
    roles: ["Admin"]
  },
  {
    label: 'Create',
    icon: 'ri-checkbox-multiple-line',
    link: '/create',
    roles: ["Admin"]
  },
  {
    label: 'Tarefas',
    icon: 'ri-checkbox-multiple-line',
    link: '/tasks',
    roles: ["Admin"]
  },
  {
    label: 'Lista de Compras',
    icon: 'ri-list-check-2',
    link: '/shop-list',
    roles: ["Admin"]
  },
  {
    label: 'Gestão Financeira',
    icon: 'ri-currency-line',
    link: '/financial-management',
    roles: ["Admin"]
  },
  {
    label: 'Despesas',
    icon: 'ri-file-list-3-line',
    link: '/expenses',
    roles: ["Admin"]
  },
  {
    label: 'Histórico',
    icon: 'ri-history-line',
    link: '/data-history',
    roles: ["Admin"]
  }
];
