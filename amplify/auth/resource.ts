import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resources';
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});