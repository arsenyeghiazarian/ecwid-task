import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';

export function usePageTitle(titleKey?: string, descriptionKey?: string) {
  const route = useRoute();
  const { t } = useI18n();

  const title = computed(() => {
    const key = titleKey || (route.meta.titleKey as string);
    const pageTitle = key ? t(key) : t('header.title');
    return `${pageTitle} | ${t('header.title')}`;
  });

  const description = computed(() => {
    const descKey = descriptionKey || (route.meta.descriptionKey as string);
    return descKey ? t(descKey) : '';
  });

  useHead({ title: title, meta: [{ name: 'description', content: description }] });
}
