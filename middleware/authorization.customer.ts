import { roles } from '~/consts/roles';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on client side entirely
  if (import.meta.client) return;
  const userRoleCookie = useCookie('userRole');
  const userRole: string = userRoleCookie && userRoleCookie.value ? userRoleCookie.value.toString() : '';

  if (userRole !== roles.customer) {
    return abortNavigation();
  }
});
