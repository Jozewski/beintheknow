/**
 * Client-side chat continuity keys, shared between the chat panel and the
 * auth flows.
 *
 * These localStorage keys are what lets a conversation survive a page
 * refresh. On SHARED computers (halfway houses, reentry centers, libraries -
 * common for this product's users) they are also how one person's
 * conversation could leak to the next person at the machine. Sign-out must
 * therefore clear them: logging out is the user's signal that they are
 * walking away from this device.
 */

export const CHAT_SESSION_ID_KEY = "jo:sessionId";
export const CHAT_GUEST_TOKEN_KEY = "jo:guestToken";

/** Removes all stored chat continuity state for this browser. */
export function clearStoredChatState() {
  try {
    window.localStorage.removeItem(CHAT_SESSION_ID_KEY);
    window.localStorage.removeItem(CHAT_GUEST_TOKEN_KEY);
  } catch {
    // Storage unavailable (private browsing) - nothing persisted anyway.
  }
}
