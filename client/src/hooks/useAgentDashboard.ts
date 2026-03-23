import { useEffect, useState } from "react";
import { getConversation } from "../api/conversationApi";
import { getDashboardInsight } from "../api/dashboardApi";
import { sendChatMessage } from "../api/chatApi";
import type {
  AgentRole,
  ChatMessage,
  DashboardInsight,
} from "../types/api";

export const useAgentDashboard = (startupId: string, agentRole: AgentRole) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [dashboard, setDashboard] = useState<DashboardInsight | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [conversationData, dashboardData] = await Promise.all([
        getConversation(startupId, agentRole).catch(() => null),
        getDashboardInsight(startupId, agentRole).catch(() => null),
      ]);

      setMessages(conversationData?.messages || []);
      setDashboard(dashboardData);
    } catch (err) {
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      setSending(true);
      setError(null);

      await sendChatMessage({
        startupId,
        agentRole,
        message,
      });

      await loadData();
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!startupId) return;
    loadData();
  }, [startupId, agentRole]);

  return {
    messages,
    dashboard,
    loading,
    sending,
    error,
    sendMessage,
    reload: loadData,
  };
};