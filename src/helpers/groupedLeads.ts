import { Leads } from "../types";

// alterar depois, caso necessário
const topics = {
  INITIAL_CONTACT: "contact",
  DISCUSSION: "discussion",
  DECISION_MAKING: "decision",
  CONTRACT: "contract",
}

export default function groupedLeads(leads: Leads[]) {
  return leads.reduce((acc, lead) => {
    if (!acc[topics[lead.title]]) {
      acc[topics[lead.title]] = [];
    }
    acc[topics[lead.title]].push(lead);
    return acc;
  }, {} as Record<string, Leads[]>);
}