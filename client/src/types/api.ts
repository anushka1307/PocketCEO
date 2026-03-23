export type AgentRole = "cso" | "cmo" | "cfo";

export interface DashboardInsight {
  startupId: string;
  agentRole: AgentRole;
  summary: string;
  topRecommendations: string[];
  risks: string[];
  nextActions: string[];
  updatedAt: string;
}

export interface ChatMessage {
  _id: string;
  conversationId: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ConversationResponse {
  conversationId: string;
  startupId: string;
  agentRole: AgentRole;
  messages: ChatMessage[];
}

export interface ChatResponse {
  response: string;
  dashboard: {
    summary: string;
    topRecommendations: string[];
    risks: string[];
    nextActions: string[];
  };
  conversationId: string;
}