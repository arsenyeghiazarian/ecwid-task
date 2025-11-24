import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/CatalogView.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { titleKey: 'pages.home', descriptionKey: 'meta.home', keepAlive: true },
  },
  {
    path: '/category/:id',
    name: 'CategoryPage',
    component: () => import('@/views/CategoryPageView.vue'),
    meta: { titleKey: 'pages.category', descriptionKey: 'meta.category', keepAlive: true },
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: () => import('@/views/ProductDetailsView.vue'),
    meta: {
      titleKey: 'pages.productDetails',
      descriptionKey: 'meta.productDetails',
      keepAlive: false,
    },
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('@/views/CartPageView.vue'),
    meta: { titleKey: 'pages.shoppingCart', descriptionKey: 'meta.shoppingCart', keepAlive: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/PageNotFoundView.vue'),
    meta: { titleKey: 'pages.pageNotFound', descriptionKey: 'meta.pageNotFound', keepAlive: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
