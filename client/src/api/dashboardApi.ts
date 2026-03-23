import { API_BASE_URL } from "./http";
import type { AgentRole, DashboardInsight } from "../types/api";

export const getDashboardInsight = async (
  startupId: string,
  agentRole: AgentRole
): Promise<DashboardInsight> => {
  const response = await fetch(
    `${API_BASE_URL}/api/dashboard/${startupId}/${agentRole}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard insight.");
  }

  return response.json();
};