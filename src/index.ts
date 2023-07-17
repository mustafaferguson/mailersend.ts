import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  addDomain,
  addToSuppressionList,
  bulkEmailStatus,
  createToken,
  createWebhook,
  deleteDomain,
  deleteFromSuppressionList,
  deleteRecipient,
  deleteScheduledMessage,
  deleteToken,
  deleteWebhook,
  dnsRecords,
  domainById,
  listActivity,
  listDomains,
  listMessages,
  listRecipients,
  listScheduledMessages,
  listSuppressions,
  listTemplates,
  listWebhooks,
  messageById,
  recipientById,
  recipientsForDomain,
  scheduledMessageById,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateDomain,
  updateToken,
  updateWebhook,
  verificationStatus,
  webhookById,
} from "./modules";

export { Client };

export default Client;