import { API_BASE_URL } from "./http";
import type { AgentRole, ConversationResponse } from "../types/api";

export const getConversation = async (
  startupId: string,
  agentRole: AgentRole
): Promise<ConversationResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/api/conversations/${startupId}/${agentRole}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch conversation.");
  }

  return response.json();
};