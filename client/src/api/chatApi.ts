import { API_BASE_URL } from "./http";
import type { AgentRole, ChatResponse } from "../types/api";

interface SendChatMessageParams {
  startupId: string;
  agentRole: AgentRole;
  message: string;
}

export const sendChatMessage = async ({
  startupId,
  agentRole,
  message,
}: SendChatMessageParams): Promise<ChatResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startupId,
      agentRole,
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send chat message.");
  }

  return response.json();
};