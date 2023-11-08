"use client";
import { useEffect, useRef, useState } from "react";
import ValidatorDialog from "../validator-token-form";
import EventDataList from "../event-data-list";
import { EventInfo } from "@/app/types/events";

interface ValidatorContainerProps {
  onTokenConfirm: (token: string) => void;
}

export default function ValidatorContainer() {
  const [eventData, setEventData] = useState<EventInfo>()
  const loadValidatorByToken = async (token: string) => {
    try {
      const callApi = async () => {
        const res = await fetch(`/api/validator-token/?token=${token}`);
        return res;
      };
      const response = await callApi();
      const data = await response.json();
      if (data) {
        setEventData(data)
        localStorage.setItem('token', token);
      }
    } catch (error) {
      console.error("errr", error);
    }
  };

  
  if (!eventData) {
    return <>
      <ValidatorDialog onTokenConfirm={loadValidatorByToken} />;      
    </>
  }

  return <EventDataList eventData={eventData}/>

}
