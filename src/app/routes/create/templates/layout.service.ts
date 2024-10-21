import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  variaveis = [
    'Foto',
    'Nome', 'Morada', 'Contacto', 'E-mail',
    'Linguas',
    'Personalidade',
    'Hobbies',
    'Perfil',
    'Educacao',
    'Experiencia',
    'Certificados',
    'Skills'
  ];
  layout = {
    type: 'f1',
    colums: [],
  };
  components = [
    'photo',
    'text',
    'list'
  ];
  forms = [
    {
      type: 'photo',
      value: '',
    },
    {
      type: 'text',
      title: 'Profile',
      value: '',
      data: [{
        value: ''
      }]
    },
    {
      type: 'list',
      title: 'Profile',
      data: [{
        value: ''
      }]
    }
  ];

  constructor() { }

}
