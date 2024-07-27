"use client";
import React, { useEffect, useRef, useState } from 'react';

const JitsiMeet = () => {
  const jitsiContainerRef = useRef(null);
  const [jitsiApi, setJitsiApi] = useState(null);

  useEffect(() => {
    const loadJitsiScript = () => {
      if (!window.JitsiMeetExternalAPI) {
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = initJitsi;
        document.body.appendChild(script);
      } else {
        initJitsi();
      }
    };

    const initJitsi = () => {
      if (!jitsiContainerRef.current || jitsiApi) return;

      const domain = 'meet.jit.si';
      const options = {
        roomName: 'e-medicine',
        width: '100%',
        height: 500,
        parentNode: jitsiContainerRef.current,
        lang: 'es',
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      setJitsiApi(api);

      api.addEventListeners({
        videoConferenceJoined: handleVideoConferenceJoined,
        participantJoined: handleParticipantJoined,
      });
    };

    const handleVideoConferenceJoined = () => {
      console.log('El usuario local se ha unido a la conferencia');
    };

    const handleParticipantJoined = (participant) => {
      console.log('Un nuevo participante se ha unido', participant);
    };

    loadJitsiScript();

    return () => {
      if (jitsiApi) {
        jitsiApi.dispose();
      }
    };
  }, [jitsiApi]);

  return <div ref={jitsiContainerRef} />;
};

export default JitsiMeet;


