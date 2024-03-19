import { useState, useEffect } from "react";
import { baseUrl, getRequest } from "services/api/apiService";

export const useFetchRecipient = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  // verificar se está renderizando multiplas vezes
  const recipientId = chat?.members?.find((id: string) => id !== user?.companyId);
 
  useEffect(() => {
    const fetchRecipient = async () => {
      if(!recipientId) return;
      try {
        const response = await getRequest(`${baseUrl}/api/chat/client/${recipientId}`);
        if(response.error) {
          return setError(response);
        } else {
          setRecipientUser(response);
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchRecipient();
  }, [recipientId])
  return { recipientUser, error };
};