import NewPassword from "~/pages/authentication/newPassword.vue";

const pageRoutes = {
  authentication: {
    login: '/login',
    recovery: '/forgot-password',
    newPassword: '/new-password',
    verifyEmail: '/verify-email',
  },
  common: {
    building: {
      list: '/building',
      detail: '/building/detail',
    },
    room: {
      list: '/room',
    },
    profile: {
      page: '/profile',
    },
    staff: {
      list: '/staff',
    },
    customer: {
      list: '/customer',
    },
    bill: {
      list: '/bill',
    },
    support_ticket: {
      list: '/support-ticket',
    },
    notice: {
      sent: '/notice/sent',
      new: '/notice/new',
      inbox: '/notice/inbox',
      starred: '/notice/starred',
    },
    contract: {
      list: '/contract',
    },
    report: {
      page: '/report',
    },
  },
};

export { pageRoutes };
