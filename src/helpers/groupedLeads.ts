import { Leads } from "@types";

// alterar depois, caso necessário
const topics = {
  INITIAL_CONTACT: "contact",
  DISCUSSION: "discussion",
  DECISION_MAKING: "decision",
  CONTRACT: "contract",
}

export default function groupedLeads(leads: Leads[]) {
  return leads.reduce((acc: any, lead: Leads) => {
    // @ts-ignore
    if (!acc[topics[lead?.title]]) { acc[topics[lead?.title]] = []; }

    // @ts-ignore
    acc[topics[lead?.title]].push(lead);

    return acc;
  }, {} as Record<string, Leads[]>);
}