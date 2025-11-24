declare module 'vuetify/components' {
  import { DefineComponent } from 'vue';
  const components: Record<string, DefineComponent>;
  export default components;
}

declare module 'vuetify/directives' {
  import { Directive } from 'vue';
  const directives: Record<string, Directive>;
  export default directives;
}
