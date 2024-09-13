import type { Struct, Schema } from '@strapi/strapi';

export interface ElementElement extends Struct.ComponentSchema {
  collectionName: 'components_element_elements';
  info: {
    displayName: 'Element';
    icon: 'star';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'element.element': ElementElement;
    }
  }
}
